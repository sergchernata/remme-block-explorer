import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { CreateTable } from "../../components";
import { blocksFetch } from "../../modules/blocks";

class BlocksTable extends Component {
  componentDidMount() {
    this.props.blocksFetch();
  }

  changePage = () => {
    const { blocks, blocksFetch } = this.props;
    if (blocks.length - 1 !== parseInt(blocks[0].header.block_num)) {
      blocksFetch({ start: parseInt(blocks[blocks.length - 1].header.block_num) - 1, limit: 10 });
    }
  };

  static columns = [{
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    render: text => <Link to={`/blocks/${text}`}>{text.slice(0, 8)}...{text.slice(-8)}</Link>
  }, {
    title: 'Txns',
    dataIndex: 'txns',
    key: 'txns',
  }, {
    title: 'Miner',
    dataIndex: 'miner',
    key: 'miner',
    render: text => `${text.slice(0, 8)}...${text.slice(-8)}`
  }, {
    title: 'Time',
    dataIndex: 'timestamp',
    key: 'timestamp',
  }];

  _prepareBlocks(blocks) {
    return blocks.reduce((prev, curr) => {
      return [ ...prev, {
        key: curr.header_signature,
        id: curr.header_signature,
        txns: curr.batches.reduce((prev, curr) => {
          return prev += curr.transactions.length;
        }, 0),
        miner: curr.header.signer_public_key,
        timestamp: curr.header.timestamp,
      }]
    }, []);
  }

  render() {
    const { onlyRecent, blocks } = this.props;
    let dataSource, total;
    if (blocks.length) {
      dataSource = this._prepareBlocks(blocks);
      total = 1 + parseInt(blocks[0].header.block_num);
    }
    return (
      <CreateTable
        title={`${onlyRecent ? "Recent " : ""}Blocks`}
        dataSource={dataSource}
        columns={BlocksTable.columns}
        pagination={!onlyRecent && {
          pageSize: 10
        }}
        link={onlyRecent && {
          to: "/blocks"
        }}
      />
    );
  }
}

export default connect(
  ({ blocks }, { onlyRecent }) => ({ blocks: onlyRecent ? blocks.slice(0, 10) : blocks }),
  { blocksFetch },
)(BlocksTable);
