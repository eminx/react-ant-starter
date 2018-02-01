import React, { Component } from 'react';
import { Menu, Dropdown, Icon, Divider, Input } from 'antd';
const SubMenu = Menu.SubMenu;

const dropdownMenu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);


export default class Components extends Component {
  render() {

    const inputStyle= {
      maxWidth: 200,
      margin: '1em'
    }

    return (
      <div>
        <h3>Dropdown</h3>
        <Dropdown overlay={dropdownMenu}>
          <a className="ant-dropdown-link" href="#">
            Cascading menu <Icon type="down" />
          </a>
        </Dropdown>
        <Divider />

        <h3>Inputs</h3>
        <Input style={inputStyle} size="large" placeholder="large size" />
        <Input style={inputStyle} placeholder="default size" />
        <Input style={inputStyle} size="small" placeholder="small size" />
      </div>
    );
  }
}
