import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Badge, Icon, Popover, Tabs, Spin, Menu, Dropdown, Avatar } from 'antd';
import Notifications from './Notifications';
import { ICONS } from '../constants/ICONS';
import DRIcon from '../Reusables/DRIcon/DRIcon';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

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
  flexBasis: '200px',
  justifyContent: 'center',
  borderBottom: '1px solid #F0F0F0',
  fontFamily: 'system-light',
  cursor: 'pointer'
}

const notifications =
  <Notifications
    count={4}
    onItemClick={(item, tabProps) => {
      console.log(item, tabProps); // eslint-disable-line
    }}
    popupAlign={{ offset: [0, -5] }}
  >
    <Notifications.Tab
      list={[]}
      title="Logs"
      emptyText="erorororo"
      emptyImage="https://gw.alipayobjects.com/zos/rmsportal/sAuJeJzSKbUmHfBQRzmZ.svg"
    />
    <Notifications.Tab
      list={[]}
      title="Errors"
      emptyText="Shalal"
      emptyImage="https://gw.alipayobjects.com/zos/rmsportal/HsIsxMZiWKrNUavQUXqx.svg"
    />
  </Notifications>;

const avatarSource = "https://raw.githubusercontent.com/gustavlrsn/artist-faces/master/plath.png";

export default class BeeHeader extends Component {

  render() {

    const children = this.props.children;
    let title;
    if (children === "/") {
      title = "Dashboard";
    } else {
      title = capitalizeFirstLetter(children.replace(/\//g, ''));
    }

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
          <h1 className="page-title">{title}</h1>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
          <div style={{paddingRight: 50, paddingTop: 5}}>
            <DRIcon icon={ICONS.SEARCH} />
          </div>

          <div style={{paddingRight: 30, paddingTop: 5}}>
            <Icon type="appstore-o" style={{fontSize: 24, fontWeight: 300}} />
          </div>

          <div style={{paddingRight: 30, paddingTop: 5}}>
            {notifications}
          </div>

          <div style={profilePartsStyle}>
            <Popover placement="bottom" title="User" content={menu} trigger="click" popupAlign={{ offset: [0, -15] }}>
              <span>
                <Avatar icon="user" size="large" src={avatarSource} />
                <span> Sylvia Plath</span>
              </span>
            </Popover>
          </div>
        </div>
      </Header>
    );
  }
}
