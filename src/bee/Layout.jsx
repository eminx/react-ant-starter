import React, { Component } from 'react';
import { Layout, Icon, Input, AutoComplete } from 'antd';
import { NavLink } from 'react-router-dom';
import BeeNav from './Nav';
import BeeHeader from './Header';
import Notifications from './Notifications';
const { Header, Sider, Content } = Layout;

const theNavigation =
  <Notifications
    count={4}
    onItemClick={(item, tabProps) => {
      console.log(item, tabProps); // eslint-disable-line
    }}
    popupAlign={{ offset: [20, -16] }}
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
          breakpoint={'xl'}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.toggleSider}
        >
          <div className="logo" />
          <BeeNav />
        </Sider>
        <Layout style={{ background: '#FEFEFF' }}>
          <BeeHeader>
            <h1>Components</h1>
          </BeeHeader>
          <Content style={{ display: 'flex', margin: 0, padding: '2em', background: '#FEFEFF', height: '100%' }}>
            <div style={{flexBasis: '75%'}}>
              {this.props.children}
            </div>
            <div style={{position:'fixed', right: 30, flexBasis: '200px', display: 'flex', flexDirection: 'column'}}>

              <AutoComplete
                size="large"
                style={{ width: '100%' }}
                dataSource={[]}
                placeholder="search anything"
                optionLabelProp="value"
              >
                <Input suffix={<Icon type="search" className="certain-category-icon" />} />
              </AutoComplete>

              <div style={{paddingTop: 30}}>
                {theNavigation}
              </div>
            </div>

          </Content>
        </Layout>
      </Layout>
    )
  }
}
