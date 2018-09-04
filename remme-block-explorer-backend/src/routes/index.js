import express from 'express';
import Remme from 'remme';
import { base64ToArrayBuffer } from "remme-utils";
import { config } from "dotenv";

config();
const remme = new Remme.Client({
  networkConfig: {
    nodeAddress: process.env.NODE_ADDRESS || "localhost"
  }
});

const excludeFamilyNames = [
  "sawtooth_settings",
  "sawtooth_validator_registry",
  "block_info"
];

function prepareTransaction(data) {
  if (data && data[0].batches) {
    return data.map(item => {
      item.batches = item.batches.reduce((prev, item) => {
        const filter = item.transactions.filter(item => !excludeFamilyNames.includes(item.header.family_name));
        if (filter.length) {
          item.transactions = filter;
          return [
            ...prev,
            item
          ];
        } else {
          return prev;
        }
      }, []);
      return item;
    })
  }
  return data.reduce((prev, item) => {
    if (excludeFamilyNames.includes(item.header.family_name)) {
      return prev;
    }
    if (item.transactionProtobuf && item.protobuf) {
      item.data = item.protobuf.decode(item.transactionProtobuf.decode(base64ToArrayBuffer(item.payload)).data);
    }
    return [
      ...prev,
      item
    ];
  }, []);
}

const initGetRouter = (method) => {
  const router = express.Router();

  router.get('/', async (req, res) => {
    const { limit, head, start, address } = req.query;
    const response = await remme.blockchainInfo[`get${method}`]({ limit, head, start, address });
    if (method !== "BlockInfo") {
      response.data = prepareTransaction(response.data);
    }
    res.json(response);
  });

  return router;
};

const transactions = initGetRouter("Transactions");
const blocks = initGetRouter("Blocks");
const state = initGetRouter("State");
const blockInfo = initGetRouter("BlockInfo");

transactions.get('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await remme.blockchainInfo.getTransactionById(id);
  response.data = prepareTransaction([ response.data ])[0];
  res.json(response);
});

blocks.get('/:id', async (req, res) => {
  const { id } = req.params;
  const response = await remme.blockchainInfo.getBlockById(id);
  response.data = prepareTransaction([ response.data ])[0];
  res.json(response);
});

state.get('/:address', async (req, res) => {
  const { address } = req.params;
  try {
    const response = await remme.blockchainInfo.getStateByAddress(address);
    response.addressParse = response.protobuf.decode(base64ToArrayBuffer(response.data));
    res.json(response);
  } catch(e) {
    res.json({ error: e.message });
  }
});

export {
  transactions,
  blocks,
  state,
  blockInfo,
}
