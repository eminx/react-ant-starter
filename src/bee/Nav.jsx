import React, { Component } from 'react';
import { Menu, Icon, Divider } from 'antd';
import { NavLink } from 'react-router-dom'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class BeeNav extends Component {
  render() {
      return (
      <Menu
        mode="inline"
        defaultSelectedKeys={['analysis']}
        onClick={this.changeScene}
        style={{ backgroundColor: '#F5F5F6' }}
      >

      <MenuItemGroup key="g1" title="IDEA" style={{paddingBottom: 10}}>
        <Menu.Item key="principles" >
          <NavLink to={"/principles"}>
            <Icon type="bulb" style={{fontWeight: 'bold'}} />
            <span>Principles</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="guidelines" >
          <NavLink to={"/guidelines"}>
            <Icon type="compass" style={{fontWeight: 'bold'}} />
            <span>Guidelines</span>
          </NavLink>
        </Menu.Item>

        <Menu.Item key="credits" >
          <NavLink to={"/credits"}>
            <Icon type="fork" style={{fontWeight: 'bold'}} />
            <span>Inspiration & Credits</span>
          </NavLink>
        </Menu.Item>
      </MenuItemGroup>

      <Menu.Divider />

      <MenuItemGroup key="g2" title="IMPLEMENTATION">
        <SubMenu key="styles" title={<span><Icon type="skin" style={{fontWeight: 'bold'}} /><span>Styles</span></span>}>
          <Menu.Item key="abstract-styles" >
            <NavLink to={"/abstract"}>
              <span>Abstract</span>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="practical" >
            <NavLink to={"/practical-styles"}>
              <span>Practical</span>
            </NavLink>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="main-components" title={<span><Icon type="api" style={{fontWeight: 'bold'}} /><span>Main components</span></span>}>
          <Menu.Item key="monitor" >
            <NavLink to={"/monitor"}>
              <span>Monitor</span>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="analyze" >
            <NavLink to={"/analyze"}>
              <span>Analyze</span>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="create" >
            <NavLink to={"/create"}>
              <span>Create</span>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="navigate" >
            <NavLink to={"/navigate"}>
              <span>Navigate</span>
            </NavLink>
          </Menu.Item>
        </SubMenu>

        <Menu.Item key="widgets" >
          <NavLink to={"/widgets"}>
            <Icon type="solution" style={{fontWeight: 'bold'}} />
            <span>Widgets</span>
          </NavLink>
        </Menu.Item>
      </MenuItemGroup>
    </Menu>
    );
  }
}
