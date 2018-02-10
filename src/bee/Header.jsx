import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
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
  flexBasis: 275,
  justifyContent: 'center',
  borderBottom: '1px solid #F0F0F0'
}

const avatarSource = "https://dyn.web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.11540-24%2F19949478_315038825590460_3375469816457461760_n.jpg%3Foe%3D5A8075CB%26oh%3D8ea919e89bc293aa427f05eb12ca28c4&t=l&u=46722257774%40c.us&i=1500588391";

export default class BeeHeader extends Component {

  render() {
    const menu = (
      <Menu selectedKeys={[]} >
        <Menu.Item><Icon type="user" /> Profile</Menu.Item>
        <Menu.Item><Icon type="setting" /> Settings</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="logout">
          <NavLink to="/login">
            <Icon type="logout" /> Logout
          </NavLink>
        </Menu.Item>
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
              <Avatar shape="square" icon="user" size="large" src={avatarSource} />
              <span>Emin Durak</span>
            </span>
          </Dropdown>
        </div>
      </Header>
    );
  }
}
