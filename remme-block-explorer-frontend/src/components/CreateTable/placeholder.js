import React, { Fragment } from "react";
import { Divider, Table } from "antd";
import { Link } from "react-router-dom";
import { TextRow } from 'react-placeholder/lib/placeholders';

import CreateTable from "./index";

export default class extends CreateTable {
  render() {
    const { title, dataSource, columns, link } = this.props;
    columns.map(item => ({
      ...item,
      render: () => <TextRow maxHeight="22px" color="#f0f2f5" />
    }));
    return (
      <Fragment>
        {title && (
          <Fragment>
            <h2>
              <TextRow maxHeight="32px" color="#f0f2f5" style={{width: "50px"}}/>
            </h2>
            <Divider />
          </Fragment>
        )}
        <Table dataSource={dataSource} pagination={!link} columns={columns} />
        {link && <Link to={link.to} className="ant-btn" style={{float: 'right', marginTop: 20}}>{link.name || "View All"}</Link>}
      </Fragment>
    )
  }
}