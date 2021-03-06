import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Layout, Icon, Input } from 'antd';

import {logo} from './images';

import { Navigation, Social } from './components'
const { Header, Sider, Content } = Layout;
const Search = Input.Search;

class App extends Component {
  render() {
    return (
      <Layout>
        <Layout>
          <Header>
            <div className="ant-layout-header-wr">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <Navigation/>
            </div>
          </Header>
          <Content style={{ margin: '24px 16px 12px', padding: 24, background: '#fff', minHeight: 280, overflow: "auto" }}>
            <div className="content-wrap">
              {this.props.children}
            </div>
          </Content>
          <div className="social-links" style={{width: "100%", textAlign: "center", fontSize: 16, paddingBottom: 12}}>
            <Social />
          </div>
        </Layout>
      </Layout>
    );
  }
}

export default App;
