import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Tabs, Icon } from 'antd';
import classNames from 'classnames';
import LoginItem from './LoginItem';
import LoginTab from './LoginTab';
import LoginSubmit from './LoginSubmit';
import styles from './index.less';
import './Login.less';

const iconStyle = {
  fontSize: '3em',
  backgroundColor: '#fffff6',
  color: '#6F6E6E',
  borderRadius: '50%',
  padding: 10,
  fontWeight: 'light',
  textShadow: '0px 3px 3px #fff'
}

@Form.create()
class Login extends Component {
  static defaultProps = {
    className: '',
    defaultActiveKey: '',
    onTabChange: () => {},
    onSubmit: () => {},
  };
  static propTypes = {
    className: PropTypes.string,
    defaultActiveKey: PropTypes.string,
    onTabChange: PropTypes.func,
    onSubmit: PropTypes.func,
  };
  static childContextTypes = {
    tabUtil: PropTypes.object,
    form: PropTypes.object,
    updateActive: PropTypes.func,
  };
  state = {
    type: this.props.defaultActiveKey,
    tabs: [],
    active: {},
  };
  getChildContext() {
    return {
      tabUtil: {
        addTab: (id) => {
          this.setState({
            tabs: [...this.state.tabs, id],
          });
        },
        removeTab: (id) => {
          this.setState({
            tabs: this.state.tabs.filter(currentId => currentId !== id),
          });
        },
      },
      form: this.props.form,
      updateActive: (activeItem) => {
        const { type, active } = this.state;
        if (active[type]) {
          active[type].push(activeItem);
        } else {
          active[type] = [activeItem];
        }
        this.setState({
          active,
        });
      },
    };
  }
  onSwitch = (type) => {
    this.setState({
      type,
    });
    this.props.onTabChange(type);
  }
  handleSubmit = (e) => {
    e.preventDefault();
    const { active, type } = this.state;
    const activeFileds = active[type];
    this.props.form.validateFields(activeFileds, { force: true },
      (err, values) => {
        this.props.onSubmit(err, values);
      }
    );
  }
  render() {
    const { className, children } = this.props;
    const { type, tabs } = this.state;
    const TabChildren = [];
    const otherChildren = [];
    React.Children.forEach(children, (item) => {
      // eslint-disable-next-line
      if (item.type.__ANT_PRO_LOGIN_TAB) {
        TabChildren.push(item);
      } else {
        otherChildren.push(item);
      }
    });
    return (
      <div className="loginOverlay">
        <div className="loginWrapper">
          <div className="displayCard" style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="loginManager bee-container editCard" style={{flexBasis: '62%'}}>
              <h2 style={{textAlign: 'center', marginBottom: 20}}>Login</h2>
              <Form onSubmit={this.handleSubmit}>
                {
                  tabs.length ? (
                    <div>
                      <Tabs
                        animated={false}
                        className={styles.tabs}
                        activeKey={type}
                        onChange={this.onSwitch}
                      >
                        {TabChildren}
                      </Tabs>
                      {otherChildren}
                    </div>
                  ) : children
                }
              </Form>
            </div>
            <div className="displayCard-info" style={{flexBasis: '37%'}}>
              <h1 style={{textAlign: 'center', marginTop: 20}}>
                <b>Operation-tools</b> <br />
                for your<br />
                <b>21st century business</b>
              </h1>
              <div className="flex-horizontal" style={{justifyContent: 'space-evenly', marginTop: 50}}>
                <Icon type="lock" style={iconStyle} />
                <Icon type="check" style={iconStyle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.Tab = LoginTab;
Login.Submit = LoginSubmit;
Object.keys(LoginItem).forEach((item) => {
  Login[item] = LoginItem[item];
});

export default Login;
