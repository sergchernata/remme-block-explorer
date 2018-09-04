import React, { Fragment } from "react";
import { Divider } from "antd";

export default ({ title, size = 2, children }) => {
  const heading = React.createElement(`h${size}`, null, title);
  return (
    <Fragment>
      {title && (
        <Fragment>
          {heading}
        <Divider />
        </Fragment>
        )}
      {children}
    </Fragment>
  )
}