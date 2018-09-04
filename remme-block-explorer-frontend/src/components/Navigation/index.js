import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;

const NavigationItems = [{
    title: 'Home',
    link: '/',
    icon: 'home'
  }, {
    title: "Blockchain",
    icon: "api",
    items: [
      {
        title: 'View Blocks',
        link: '/blocks',
        icon: 'switcher'
      },
      {
        title: 'View Txns',
        link: '/transactions',
        icon: 'bars'
      }
    ]
}];

class Navigation extends Component {
  render() {
    const { location } = this.props;
    return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={["/"]} selectedKeys={[location.pathname]}>
        { NavigationItems.map( item => {
          return item.items ?
            <SubMenu className="ant-menu-submenu-open" key={item.title} title={<div><Icon type={item.icon} /><span>{item.title}</span></div>}>
              { item.items.map( SubItem => (
                <Menu.Item key={SubItem.link}><Link to={SubItem.link}><Icon type={SubItem.icon} /><span>{SubItem.title}</span></Link></Menu.Item>
              ))}
            </SubMenu>
          :
            <Menu.Item className="ant-menu-item" key={item.link}>
              <Link to={item.link}>
                <Icon type={item.icon} />
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
        })}
      </Menu>
    )
  }
}

export default withRouter(Navigation);
