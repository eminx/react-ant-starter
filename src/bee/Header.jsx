import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Layout, Badge, Icon, Popover, Tabs, Spin, Menu, Dropdown, Avatar } from 'antd';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

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
  flexBasis: '200px',
  justifyContent: 'center',
  borderBottom: '1px solid #F0F0F0',
  fontFamily: 'system-light',
  cursor: 'pointer'
}

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
            <Icon type="appstore-o" style={{fontSize: 24, fontWeight: 300}} />
          </div>
          <div style={profilePartsStyle}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <span>
                <Avatar icon="user" size="large" src={avatarSource} />
                <span> Sylvia Plath</span>
              </span>
            </Dropdown>
          </div>
        </div>
      </Header>
    );
  }
}
