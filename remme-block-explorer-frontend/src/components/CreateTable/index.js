import React, { Component } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";

import { CardWrap } from "../index";

class CreateTable extends Component {
  render() {
    const { title, dataSource, columns, pagination, link } = this.props;
    return (
      <CardWrap title={title}>
        <Table dataSource={dataSource} pagination={pagination} columns={columns} />
        {link && <Link to={link.to} className="ant-btn" style={{float: 'right', marginTop: 20}}>{link.name || "View All"}</Link>}
      </CardWrap>
    )
  }
}

export default CreateTable;
