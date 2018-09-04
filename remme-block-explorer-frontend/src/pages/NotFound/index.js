import React from 'react';
import { Divider } from 'antd';

export default ({ location }) => (
  <React.Fragment>
    <Divider >
      <h2 className="m-bottom">404</h2>
    </Divider>
    Page <code style={{ color: '#fa541c' }}>{location.pathname}</code> not found
  </React.Fragment>
)
