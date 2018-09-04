import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Layout, Icon, Input } from 'antd';

import logo from './logo_x.png';

import { Navigation, Social } from './components'
const { Header, Sider, Content } = Layout;
const Search = Input.Search;

class App extends Component {

  state = {
    collapsed: true,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
              <h1>REMME</h1>
            </Link>
          </div>
          <Navigation/>
        </Sider>

        <Layout>
          <Header>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />

            <div className="nav-right" style={{width: 150, display: "flex", justifyContent: "space-between"}}>
              <Social />
            </div>
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280, overflow: "auto" }}>
            <div className="content-wrap">
              {this.props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
