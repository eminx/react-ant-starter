import React from 'react';
import classNames from 'classnames';
import { Button, Form } from 'antd';
import { NavLink } from 'react-router-dom';

const FormItem = Form.Item;

export default ({ className, ...rest }) => {
  return (
    <FormItem style={{marginBottom: 0}}>
    	<NavLink to="/">
      	<Button size="large" type="primary" htmlType="submit" {...rest} />
      </NavLink>
    </FormItem>
  );
};
