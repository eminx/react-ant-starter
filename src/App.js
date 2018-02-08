import React, { Component } from 'react';
import { Layout, Menu, Icon, Divider } from 'antd';
import { NavLink } from 'react-router-dom'

const { Header, Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
    scene: 'analysis'
  }

  toggleSider = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout style={{height: '100%'}>
        <Sider
          style={{ background: '#F5F5F6' }}
          width={240}
          breakpoint={'lg'}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.toggleSider}
        >
          <div className="logo" />
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
            <Menu.Item key="style" >
              <NavLink to={"/style"}>
                <Icon type="skin" style={{fontWeight: 'bold'}} />
                <span>STYLE</span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="components" >
              <NavLink to={"/components"}>
                <Icon type="api" style={{fontWeight: 'bold'}} />
                <span>COMPONENTS</span>
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout >
          <Header style={{ background: '#F5F5F6' }}>

          </Header>
          <Content style={{ margin: 0, padding: 0, height: '100%' }}>
            <div className={'titleBack'}>
              <h1>Title of the page</h1>
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
