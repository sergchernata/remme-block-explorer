import React, { Fragment } from 'react'
import { TextBlock } from 'react-placeholder/lib/placeholders';
import { List } from 'antd';
import TokenInfo from "./index";

export default class extends TokenInfo {
  render() {
    return (
      <Fragment>
        <List
          bordered
          dataSource={this.state.data}
          className="remme-stat-list"
          renderItem={item => (
            <List.Item>
              <TextBlock rows={2} color="#f0f2f5" lineSpacing="0px" widths={[50, 25]} style={{display: "flex", justifyContent: "space-around"}} />
            </List.Item>)
          }
        />
      </Fragment>
    )
  }
}
