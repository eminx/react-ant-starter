import React, { Component } from 'react';
import { Tabs, Menu, Dropdown, Icon, Divider, Input, Radio, Switch, Checkbox, AutoComplete, Cascader, Popover, Button } from 'antd';
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


export default class Components extends Component {

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
      maxWidth: 200,
      margin: '1em'
    }

    const text = <span>Title</span>;
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    );

    return (
      <div>
        <div className="flex-horizontal align-center">
          <section className="displayCard halfWidget" style={{paddingBottom: 180}}>
            <h2>Dropdown</h2>
            <Dropdown overlay={dropdownMenu} style={{paddingTop: '1em'}}>
              <a className="ant-dropdown-link" href="#">
                Cascading menu <Icon type="down" />
              </a>
            </Dropdown>
          </section>

          <div className="codeShower-container" >
            <div className="codeShower">
              <Popover arrowPointAtCenter overlayStyle={{fontFamily: 'monospace', maxWidth: 300}} placement="bottom" title="Code snippet" content={dropdownCode} trigger="click">
                <div className="codeShower-icon">
                  <Icon type="code-o" style={{fontSize: 48, margin: 16, color: '#fff'}} />
                </div>
              </Popover>
            </div>
          </div>
        </div>

        <Divider />

        <div className="flex-horizontal align-center">
          <section className="displayCard halfWidget" >
            <h2>Inputs</h2>
            <Input style={inputStyle} size="large" placeholder="large size" />
            <Input style={inputStyle} placeholder="default size" />
            <Input style={inputStyle} size="small" placeholder="small size" />
          </section>
        </div>

        <Divider />

        <div className="flex-horizontal align-center">
          <section className="displayCard halfWidget" >
            <h2>Radio</h2>
            <RadioGroup style={{paddingTop: '1em'}} onChange={this.onRadioChange} value={this.state.radioValue}>
              <Radio value={1}>A</Radio>
              <Radio value={2}>B</Radio>
              <Radio value={3}>C</Radio>
              <Radio value={4}>D</Radio>
            </RadioGroup>
          </section>
        </div>

        <Divider />

        <div className="flex-horizontal align-center">
          <section className="displayCard halfWidget" >
            <h2>Checkbox</h2>
            <CheckboxGroup options={plainOptions} defaultValue={['Apple']} />
              <br /><br />
              <CheckboxGroup options={checkboxOptions} defaultValue={['Pear']} />
              <br /><br />
            <CheckboxGroup options={optionsWithDisabled} disabled defaultValue={['Apple']} />
          </section>
        </div>

        <Divider />

        <div className="flex-horizontal align-center">
          <section className="displayCard halfWidget" >
            <h2>Switch</h2>
            <Switch defaultChecked />
          </section>
        </div>

        <Divider />

        <div className="flex-horizontal align-center">
          <section className="displayCard halfWidget" style={{minHeight: 200}} >
            <h2>AutoComplete</h2>
            <AutoComplete
              dataSource={this.state.autoCompleteDataSource}
              onSearch={this.handleSearch}
              placeholder="input here"
            />
          </section>
        </div>

        <Divider />

        <div className="flex-horizontal align-center">
          <section className="displayCard halfWidget" style={{minHeight: 400}} >
          <h2>Cascader (Hierarchical Dropdown)</h2>
            <Cascader
              style={{width: '100%'}}
              options={cascaderOptions}
              changeOnSelect
            />
          </section>
        </div>
      </div>
    );
  }
}
