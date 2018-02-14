import React, { Component } from 'react';
import { Row, Col, Tabs, Menu, Dropdown, Icon, Divider, Input, Radio, Switch, Checkbox, AutoComplete, Cascader, Popover, Button } from 'antd';
import CodeDesignPreview from '../../Reusables/CodeDesignPreview';
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;

const dropdownMenu = (
  <Menu>
    <Menu.Item>1st menu item</Menu.Item>
    <Menu.Item>2nd menu item</Menu.Item>
    <SubMenu title="sub menu">
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item>4th menu item</Menu.Item>
    </SubMenu>
    <SubMenu title="disabled sub menu" disabled>
      <Menu.Item>5d menu item</Menu.Item>
      <Menu.Item>6th menu item</Menu.Item>
    </SubMenu>
  </Menu>
);

const cascaderOptions = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hanzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake',
    }],
  }],
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men',
    }],
  }],
}];

const plainOptions = ['Apple', 'Pear', 'Orange'];

const checkboxOptions = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

const dropdownCode = `
  <Dropdown overlay={dropdownMenu} style={{paddingTop: '1em'}}> \n
    <a className="ant-dropdown-link" href="#"> \n
      Cascading menu <Icon type="down" /> \n
    </a> \n
  </Dropdown>
`;


export default class FormItems extends Component {

  state = {
    radioValue: 3,
    autoCompleteDataSource: []
  }

  handleSearch = (value) => {
    this.setState({
      autoCompleteDataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
  }

  onRadioChange = (e) => {
    this.setState({
      radioValue: e.target.value,
    });
  }

  render() {
    const inputStyle= {
      maxWidth: 280,
      marginBottom: '1em'
    }

    const text = <span>Title</span>;
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    );

    return (
      <div style={{marginBottom: 200}}>
        <Row type="flex" gutter={16}>
          <Col span={12}>

          </Col>
          <Col span={12}>
            <CodeDesignPreview />
          </Col>
        </Row>
        <Divider />
        <h2>Form inputs</h2>
        <Row type="flex" gutter={16}>
          <Col span={12}>
              <h3>Dropdown</h3>
              <Dropdown overlay={dropdownMenu} style={{paddingTop: '1em'}}>
                <a className="ant-dropdown-link" href="#">
                  Cascading menu <Icon type="down" />
                </a>
              </Dropdown>
              <Divider />
              <h3>Radio</h3>
              <RadioGroup style={{paddingTop: '1em'}} onChange={this.onRadioChange} value={this.state.radioValue}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
              </RadioGroup>
              <Divider />
              <h3>Input</h3>
              <Input style={inputStyle} size="large" placeholder="large size" />
              <Input style={inputStyle} placeholder="default size" />
              <Input style={inputStyle} size="small" placeholder="small size" />

              <Divider />
              <h3>Checkbox</h3>
              <CheckboxGroup options={plainOptions} defaultValue={['Apple']} />
                <br /><br />
                <CheckboxGroup options={checkboxOptions} defaultValue={['Pear']} />
                <br /><br />
              <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} />

              <Divider />
              <h3>Switch</h3>
              <Switch defaultChecked />

              <Divider />
              <h3>AutoComplete</h3>
              <AutoComplete
                dataSource={this.state.autoCompleteDataSource}
                onSearch={this.handleSearch}
                placeholder="type anything"
              />

              <Divider />
              <h3>Cascader (Hierarchical Dropdown)</h3>
              <Cascader
                style={{width: '80%'}}
                options={cascaderOptions}
                changeOnSelect
              />
          </Col>

          <Col span={12}>
            <CodeDesignPreview />
          </Col>

        </Row>

      </div>
    );
  }
}
