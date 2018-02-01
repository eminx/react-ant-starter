import React, { Component } from 'react';
import { Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import BeeNav from './Nav';
import BeeHeader from './Header';
const { Header, Sider, Content } = Layout;

export default class BeeLayout extends Component {
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
      <Layout style={{height: '100%', background: '#F5F5F6'}}>
        <Sider
          style={{ background: '#F5F5F6' }}
          width={240}
          breakpoint={'lg'}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.toggleSider}
        >
          <div className="logo" />
          <BeeNav />
        </Sider>
        <Layout style={{ background: '#FEFEFF' }}>
          <BeeHeader>
            <h1>Title of the page</h1>
          </BeeHeader>
          <Content style={{ margin: 0, padding: '2em', background: '#FFFFFE', height: '100%' }}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    )
  }
}
