import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom'

export default class BeeNav extends Component {
  render() {
      return (
      <Menu
        mode="inline"
        defaultSelectedKeys={['analysis']}
        onClick={this.changeScene}
        style={{ backgroundColor: '#F5F5F6' }}
      >
        <Menu.Item key="principles" >
          <NavLink to={"/principles"}>
            <Icon type="bulb" style={{fontWeight: 'bold'}} />
            <span>PRINCIPLES</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="guidelines" >
          <NavLink to={"/guidelines"}>
            <Icon type="compass" style={{fontWeight: 'bold'}} />
            <span>GUIDELINES</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="styles" >
          <NavLink to={"/styles"}>
            <Icon type="skin" style={{fontWeight: 'bold'}} />
            <span>STYLES</span>
          </NavLink>
        </Menu.Item>
        <Menu.Item key="components" >
          <NavLink to={"/components"}>
            <Icon type="api" style={{fontWeight: 'bold'}} />
            <span>COMPONENTS</span>
          </NavLink>
        </Menu.Item>
      </Menu>
    );
  }
}
