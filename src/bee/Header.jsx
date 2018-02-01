import React, { Component } from 'react';
import { Layout } from 'antd';
// import { NavLink } from 'react-router-dom'
const { Header } = Layout;

export default class BeeHeader extends Component {
  render() {
    return (
      <Header style={{ background: '#F5F5F6', padding: 0, height: 'auto' }}>
        <div className={'titleBack'}>
          {this.props.children}
        </div>
      </Header>
    );
  }
}
