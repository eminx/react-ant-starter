import React, { Component } from 'react';
import { Layout, Badge, Icon, Popover, Tabs, Spin, Menu, Dropdown, Avatar } from 'antd';
import Notifications from './Notifications';
// import { NavLink } from 'react-router-dom'
const { Header } = Layout;
const { TabPane } = Tabs;

const headerStyle = {
  background: '#FEFEFF',
  height: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  padding: '20px 2em 0'
}

const profilePartsStyle = {
  display: 'flex',
  flexBasis: 200,
  justifyContent: 'space-around',
  borderBottom: '1px solid #F0F0F0'
}

export default class BeeHeader extends Component {

  render() {
    const menu = (
      <Menu selectedKeys={[]} >
        <Menu.Item><Icon type="user" /> Profile</Menu.Item>
        <Menu.Item><Icon type="setting" /> Settings</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout"><Icon type="logout" /> Logout</Menu.Item>
      </Menu>
    );

    return (
      <Header style={headerStyle} >
        <div className="titleBack">
          {this.props.children}
        </div>
        <div style={profilePartsStyle}>
          <Notifications
            count={4}
            onItemClick={(item, tabProps) => {
              console.log(item, tabProps); // eslint-disable-line
            }}
            popupAlign={{ offset: [20, -16] }}
          >
            <Notifications.Tab
              list={[]}
              title="Messages"
              emptyText="mamamam"
              emptyImage="https://gw.alipayobjects.com/zos/rmsportal/wAhyIChODzsoKIOBHcBk.svg"
            />
            <Notifications.Tab
              list={[]}
              title="Errors"
              emptyText="erorororo"
              emptyImage="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"
            />
            <Notifications.Tab
              list={[]}
              title="Alerts"
              emptyText="Shalal"
              emptyImage="https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg"
            />
          </Notifications>
          <Dropdown overlay={menu}>
            <span>
              <Avatar size="large" src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
              <span> Emin Durak</span>
            </span>
          </Dropdown>
        </div>
      </Header>
    );
  }
}
