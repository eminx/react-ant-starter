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

      <MenuItemGroup key="g2" title="SYSTEM">
        <SubMenu key="styles" title={<span><Icon type="skin" style={{fontWeight: 'bold'}} /><span>Styles</span></span>}>
          <Menu.Item key="layout" >
            <NavLink to={"/layout-styles"}>
              <span>Layout</span>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="navigation" >
            <NavLink to={"/navigation-styles"}>
              <span>Navigation</span>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="typography" >
            <NavLink to={"/typography-styles"}>
              <span>Typography</span>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="colors" >
            <NavLink to={"/color-styles"}>
              <span>Colors</span>
            </NavLink>
          </Menu.Item>

        </SubMenu>

        <SubMenu key="components" title={<span><Icon type="api" style={{fontWeight: 'bold'}} /><span>Components</span></span>}>
          <Menu.Item key="analysis" >
            <NavLink to={"/analysis-components"}>
              <span>Analysis</span>
            </NavLink>
          </Menu.Item>


          <Menu.Item key="configuration" >
            <NavLink to={"/configuration-components"}>
              <span>Configuration</span>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="navigation" >
            <NavLink to={"/navigation-components"}>
              <span>Navigation</span>
            </NavLink>
          </Menu.Item>

          <Menu.Item key="combo" >
            <NavLink to={"/combo-components"}>
              <span>Combo</span>
            </NavLink>
          </Menu.Item>
        </SubMenu>
      </MenuItemGroup>

      <Menu.Divider />

      <MenuItemGroup key="g1" title="ABSTRACT" style={{paddingBottom: 10}}>
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
    </Menu>
    );
  }
}
