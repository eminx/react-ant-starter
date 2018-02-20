import React, { Component } from 'react';
import { Layout, Icon, Input, AutoComplete, Progress, Alert, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import BeeNav from './Nav';
import BeeHeader from './Header';
const { Header, Sider, Content } = Layout;

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

const breadcrumb =
<Breadcrumb>
  <Breadcrumb.Item><a href="/">Home</a></Breadcrumb.Item>
  <Breadcrumb.Item><a href="">Applications List</a></Breadcrumb.Item>
  <Breadcrumb.Item>An Application</Breadcrumb.Item>
</Breadcrumb>;

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
      <Layout style={{height: '100%'}}>
        <Sider
          style={{ background: '#F5F5F6' }}
          width={240}
          breakpoint={'xl'}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.toggleSider}
        >
          <Link to="/"><div className="logo logoDR" /></Link>
          <BeeNav />
        </Sider>
        <Layout style={{ background: '#F0F0F0' }}>
          <BeeHeader>
            {this.props.router.location.pathname}
          </BeeHeader>
          <Content style={{ display: 'flex', margin: 0, padding: '2em', height: '100%', marginBottom: 100 }}>
            <div style={{flexBasis: '80%'}} >
              {breadcrumb}
              {this.props.children}
            </div>

            {/*
              <div style={{position:'fixed', right: 30, maxWidth: 240, flexBasis: '200px', display: 'flex', flexDirection: 'column'}}>
                <AutoComplete
                  size="large"
                  style={{ width: '100%' }}
                  dataSource={[]}
                  placeholder="search anything"
                  optionLabelProp="value"
                >
                  <Input suffix={<Icon type="search" className="certain-category-icon" />} />
                </AutoComplete>

                <div style={flexiAlert}>
                  <Alert message="Deployment succesfulz" type="success" showIcon />
                  <Alert message="New member added" type="info" showIcon />
                  <Alert message="Shortage of space" type="warning" showIcon />
                </div>

                <div style={flexiProgress}>
                  <Progress type="circle" percent={30} width={80} />
                  <Progress type="circle" percent={100} width={80} />
                </div>
              </div>
            */}

          </Content>
        </Layout>
      </Layout>
    )
  }
}
