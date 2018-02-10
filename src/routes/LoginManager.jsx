import React from 'react';
import Login from '../Login';
import { Alert, Checkbox } from 'antd';

const { Tab, UserName, Password, Mobile, Captcha, Submit } = Login;

export default class LoginManager extends React.Component {
  state = {
    notice: '',
    type: 'tab2',
    autoLogin: true,
  }
  onSubmit = (err, values) => {
    console.log('value collected ->', { ...values, autoLogin: this.state.autoLogin });
    if (this.state.type === 'tab1') {
      this.setState({
        notice: '',
      }, () => {
        if (!err && (values.username !== 'admin' || values.password !== '888888')) {
          setTimeout(() => {
            this.setState({
              notice: '账号或密码错误！',
            });
          }, 500);
        }
      });
    }
  }
  onTabChange = (key) => {
    this.setState({
      type: key,
    });
  }
  changeAutoLogin = (e) => {
    this.setState({
      autoLogin: e.target.checked,
    });
  }
  render() {
    return (
      <Login
        defaultActiveKey={this.state.type}
        onTabChange={this.onTabChange}
        onSubmit={this.onSubmit}
      >
        <Tab key="tab1" tab="Password">
          {
            this.state.notice &&
            <Alert style={{ marginBottom: 24 }} message={this.state.notice} type="error" showIcon closable />
          }
          <UserName name="username" />
          <Password name="password" />
        </Tab>
        <Tab key="tab2" tab="SMS code">
          <Mobile name="mobile" />
          <Captcha onGetCaptcha={() => console.log('Get captcha!')} name="captcha" />
        </Tab>
        <div style={{marginTop: 10}}>
          <Checkbox checked={this.state.autoLogin} onChange={this.changeAutoLogin}>Save credentials</Checkbox>
        </div>
        <div style={{marginTop: 25, display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>
          <a href="">Register</a>
          <Submit style={{marginBottom: 0}}>Login</Submit>
        </div>
        <div style={{marginTop: 10}}>
          <a href="">Forgot your password?</a>
        </div>
      </Login>
    );
  }
}
