import axios from 'axios';
import { ajax } from "rxjs/ajax";

import { urls } from "./index";

const serverRequest = config => async ({ data = false, params = false } = { data: false, params: false }) => {
  try {
    const r = await axios({
      ...config,
      data: data || undefined,
      params: params || undefined,
    });
    return r.data;
  } catch (e) {
    return e.response.data;
  }
};

const serverRequestPipe = config => ({ data = null, params = null } = { data: null, params: null }) => {
  let { url } = config;
  if (params) {
    url += '?' + Object.entries(params).reduce((prev, [key, val]) => {
      if (val) {
        return [
          ...prev,
          key + "=" + encodeURIComponent(val)
        ]
      } else {
        return prev;
      }
    }, []).join("&");
  }
  return ajax({
    ...config,
    url,
    body: data,
    responseType: "json"
  })
};

const methods = name => {
  const url = name[0].toLowerCase() + name.slice(1);
  return {
    [`get${name}`]: serverRequest({
      method: 'GET',
      url: urls[url],
    }),
    [`get${name}ById`]: id => (serverRequest({
      method: 'GET',
      url: `${urls[url]}/${id}`,
    }))(id),
  };
};
const methodsPipe = name => {
  const url = name[0].toLowerCase() + name.slice(1);
  return {
    [`get${name}Pipe`]: serverRequestPipe({
      method: 'GET',
      url: urls[url],
    }),
    [`get${name}ByIdPipe`]: id => (serverRequestPipe({
      method: 'GET',
      url: `${urls[url]}/${id}`,
    }))(id),
  };
};

const blocksTimestampPipe = {
  getBlockInfoPipe: serverRequestPipe({
    method: 'GET',
    url: urls.blocksTimestamp,
  })
};

const blocksTimestamp = {
  getBlockInfo: serverRequest({
    method: 'GET',
    url: urls.blocksTimestamp,
  })
};

const coinMarketCap = {
  getCoinMarketInfo: serverRequest({
    method: 'GET',
    url: urls.coinmarketcap,
  })
};

const testTokens = {
  getTestTokens: serverRequest({
    method: 'POST',
    url: urls.faucet
  })
};

const accountGenerator = {
  generateKeys: serverRequest({
    method: 'GET',
    url: urls.keysGenerator
  })
};

export default {
  ...methods("Transactions"),
  ...methodsPipe("Transactions"),
  ...methods("Blocks"),
  ...methodsPipe("Blocks"),
  ...methods("State"),
  ...methodsPipe("State"),
  ...coinMarketCap,
  ...blocksTimestamp,
  ...blocksTimestampPipe,
  ...testTokens,
  ...accountGenerator
}
