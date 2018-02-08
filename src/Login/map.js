import React from 'react';
import { Input, Icon } from 'antd';
import styles from './index.less';

const map = {
  UserName: {
    component: Input,
    props: {
      size: 'large',
      prefix: <Icon type="user" className={styles.prefixIcon} />,
      placeholder: 'admin',
    },
    rules: [{
      required: true, message: 'Pleaase enter a valid email address',
    }],
  },
  Password: {
    component: Input,
    props: {
      size: 'large',
      prefix: <Icon type="lock" className={styles.prefixIcon} />,
      type: 'password',
      placeholder: '',
    },
    rules: [{
      required: true, message: 'Please enter a valid password',
    }],
  },
  Mobile: {
    component: Input,
    props: {
      size: 'large',
      prefix: <Icon type="mobile" className={styles.prefixIcon} />,
    placeholder: 'Phone number',
    },
    rules: [{
      required: true, message: 'Please enter a valid ph.',
    }, {
      pattern: /^1\d{10}$/, message: 'Please enter a valid phone number',
    }],
  },
  Captcha: {
    component: Input,
    props: {
      size: 'large',
      prefix: <Icon type="mail" className={styles.prefixIcon} />,
      placeholder: '',
    },
    rules: [{
      required: true, message: 'Please re-enter the Captcha',
    }],
  },
};

export default map;
