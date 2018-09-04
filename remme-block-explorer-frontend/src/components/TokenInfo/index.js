import React, { Component, Fragment } from 'react'
import { List } from 'antd';
import numeral from 'numeral';

class TokenInfo extends Component {
  state = {
    data: [{
      key: 'circulatingSupply',
      title: 'Circulating REM:',
      value: this.props.info && numeral(this.props.info.data.circulating_supply).format('0,0[.]00')
    // },{
    //   key: 'nodes',
    //   title: 'Total Nodes:',
    //   value: '164'
    },{
      key: 'price',
      title: 'USD/REM',
      value: this.props.info && numeral(this.props.info.data.quotes.USD.price).format('$0,0.0000')
    },{
      key: 'marketCap',
      title: 'Market Cap:',
      value: this.props.info && numeral(this.props.info.data.quotes.USD.market_cap).format('$0,0[.]00')
    }]
  };

  render() {
    const { data } = this.state;
    return (
      <Fragment>
        <List
          bordered
          dataSource={data}
          className="remme-stat-list"
          renderItem={item => (
            <List.Item>
              {item.title}
              <span>{item.value}</span>
            </List.Item>)
          }
        />
      </Fragment>
    )
  }
}

export default TokenInfo;
