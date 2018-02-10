import React from 'react';
import classNames from 'classnames';
import { Button, Form } from 'antd';
import styles from './index.less';
import { NavLink } from 'react-router-dom';

const FormItem = Form.Item;

export default ({ className, ...rest }) => {
  const clsString = classNames(styles.submit, className);
  return (
    <FormItem style={{marginBottom: 0}}>
    	<NavLink to="/">
      	<Button size="large" className={clsString} type="primary" htmlType="submit" {...rest} />
      </NavLink>
    </FormItem>
  );
};
