import React, { Component } from 'react';
import { Layout, Icon, Input, AutoComplete, Progress, Alert } from 'antd';
import { NavLink } from 'react-router-dom';
import BeeNav from './Nav';
import BeeHeader from './Header';
import Notifications from './Notifications';
const { Header, Sider, Content } = Layout;

const notifications =
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

const flexi = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 40,
  justifyContent: 'space-between'
}

const flexiAlert = flexi;
const flexiProgress = flexi;
flexiAlert.height = 120;
flexiProgress.height = 170;

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
          <div className="logo logoDR" />
            <h1>Logo</h1>
          <BeeNav />
        </Sider>
        <Layout style={{ background: '#FEFEFF' }}>
          <BeeHeader>
            {this.props.router.location.pathname}
          </BeeHeader>
          <Content style={{ display: 'flex', margin: 0, padding: '2em', background: '#FEFEFF', height: '100%', marginBottom: 100 }}>
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
                {notifications}
              </div>

              <div style={flexiAlert}>
                <Alert message="Success Tips" type="success" showIcon />
                <Alert message="Informational Notes" type="info" showIcon />
                <Alert message="Warning" type="warning" showIcon />
              </div>

              <div style={flexiProgress}>
                <Progress type="circle" percent={30} width={80} />
                <Progress type="circle" percent={100} width={80} />
              </div>
            </div>

          </Content>
        </Layout>
      </Layout>
    )
  }
}
