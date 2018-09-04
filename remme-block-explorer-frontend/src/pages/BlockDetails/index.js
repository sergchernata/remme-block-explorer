import React, { Component } from "react";
import { connect } from "react-redux";

import { getTransactionsView, objToArray } from "../../functions";
import { DetailView } from "../../components";
import { blocksFetch } from "../../modules/blocks";

class BlockDetails extends Component {
  state = {
    loading: true,
  };

  static blockToShow = [
    "block_num",
    "previous_block_id",
    "signer_public_key",
    "state_root_hash",
    "timestamp"
  ];

  async componentDidMount() {
    let { block, blocksFetch, match: { params: { id: hash } } } = this.props;
    if (!block) {
      blocksFetch({ hash });
    }
    this.setState({
      loading: false
    })
  }

  filter = ({ key }) =>  !BlockDetails.blockToShow.includes(key);

  render() {
    const { loading } = this.state;
    const { block } = this.props;
    const data = {};

    if (block) {
      data.Header = objToArray(block.header, this.filter);
      data.Transactions = getTransactionsView(block.batches.reduce((prev, curr) => {
        return [
          ...prev,
          ...curr.transactions
        ]
      }, []));
    }

    return (
      <DetailView
        title={`ID: ${this.props.match.params.id}`}
        data={data}
        loading={loading}
      />
    )
  }
}

export default connect(({ blocks }, ownProps) => ({
  block: blocks.filter(item => item.header_signature === ownProps.match.params.id)[0]
}), { blocksFetch })(BlockDetails);