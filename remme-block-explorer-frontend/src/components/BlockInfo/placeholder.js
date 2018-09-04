import React, { Fragment } from "react";
import { TextBlock } from 'react-placeholder/lib/placeholders';
import { Card } from "antd";
import BlockInfo from "./index";

export default class extends BlockInfo {
  render () {
    return (
      <Fragment>
        { this.state.data.map( item => (
          <Card.Grid key={item} style={BlockInfo.gridStyle}>
            <TextBlock rows={1} color="#f0f2f5" widths={[50]} style={{justifyContent: "center", display: "flex"}} />
            <br />
            <TextBlock rows={1} color="#f0f2f5" widths={[50]} style={{justifyContent: "center", display: "flex"}} />
          </Card.Grid>
        ))}
      </Fragment>
    )
  }
}
