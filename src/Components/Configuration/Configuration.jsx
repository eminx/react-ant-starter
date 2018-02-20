import React, { Component } from 'react';
import { Affix, Row, Col, Tabs, Popconfirm, Menu, Dropdown, Icon, Divider, Input, InputNumber, Radio, Switch, Checkbox, AutoComplete, Cascader, Popover, Button } from 'antd';
import reactElementToJSXString from 'react-element-to-jsx-string';
import CodeDesignPreview from '../../Reusables/CodeDesignPreview';
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const SubMenu = Menu.SubMenu;

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
  <Dropdown
    overlay={dropdownMenu}
    style={{paddingTop: '1em'}}
  >
    <a className="ant-dropdown-link" href="#">
      Cascading menu <Icon type="down" />
    </a>
  </Dropdown>
`;

const formDesign =
<div>
  <h3>General</h3>
  <p>
    Try only to use these form items for forms. You will find additional items
    at the Ant Design catalogue, if required. But it is adviced to make sure
    that styling fits to the outlined guide.
  </p>
  <h3>Size</h3>
  <p>
    For most use-cases, use the default size. For login kind of important operations
    where the user is required to concentrate only on one thing at a time, which is a form,
    then use the large size. For detailed configuration operations that have form items
    appear under a popup or so, use the small size.
  </p>
</div>

const buttonDesign =
<div>
  <h3>General</h3>
  <p>
    Right buttons with right icons and right size in the right place.
    There's another type of button also at the navigation page.
  </p>
</div>

const buttonCode = `
<Popconfirm
  title="Are you sure?"
  okText="Yes"
  cancelText="No"
>
  <Button
    size="large"
    type="danger"
    icon="exclamation-circle"
  >
    Delete forever
  </Button>
</Popconfirm>
`;

export default class Configure extends Component {

  state = {
    radioValue: 3,
    autoCompleteDataSource: [],
    loading: false,
    success: false
  }

  enterLoading = () => {
    this.setState({
      loading: true
    });
    setTimeout(()=> {
      this.setState({
        loading: false,
        success: true
      })
    }, 2000);
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
      width: 240,
      marginBottom: 20
    }

    const text = <span>Title</span>;
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    );

    const { loading, success } = this.state;

    return (
      <div style={{marginBottom: 200}}>
        <h2>Buttons</h2>
        <Row type="flex" gutter={24}>
          <Col span={12} >
            <CodeDesignPreview design={buttonDesign} code={buttonCode} />
          </Col>
          <Col span={12}>
            <h3>Submit (for forms)</h3>
            <Button
              loading={loading}
              icon={success ? 'check' : loading ? null : 'cloud-upload' }
              onClick={this.enterLoading}
            >
              {success ? 'Success!' : loading ? 'Sending' : 'Submit'}
            </Button>
            <Divider />

            <h3>Irreversible actions</h3>
            <Popconfirm title="Are you sure?" okText="Yes" cancelText="No">
              <Button>Confirm</Button>
            </Popconfirm>
            <Divider />

            <h3>Irreversible and dangerous actions</h3>
            <Popconfirm title="You will lose all your data. Are you sure?" okText="Yes" cancelText="No">
              <Button size="large" type="danger" icon="trash">Delete</Button>
            </Popconfirm>
            <Divider />

            <h3>Positive (for purchases etc)</h3>
            <Button size="large" type="primary" icon="check-circle">Buy</Button>
            <Divider />
          </Col>
        </Row>

        <Divider />

        <Affix offsetTop={40}>
          <h2>Form inputs</h2>
        </Affix>
        <Row type="flex" gutter={24}>
          <Col span={12}>
            <Affix offsetTop={87}>
              <CodeDesignPreview
                design={formDesign}
                code={dropdownCode}
              />
            </Affix>
          </Col>

          <Col span={12}>
            <h3>Dropdown</h3>
            <Dropdown overlay={dropdownMenu} style={{paddingTop: '1em'}}>
              <a className="ant-dropdown-link">
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

            <h3>Input(text)</h3>
            <Input style={inputStyle} size="large" placeholder="large size" />
            <Input style={inputStyle} placeholder="default size" />
            <Input style={inputStyle} size="small" placeholder="small size" />
            <Divider />

            <h3>Input(number)</h3>
            <InputNumber style={inputStyle} size="large" min={1} max={100000} defaultValue={3} />
            <InputNumber style={inputStyle} min={1} max={100000} defaultValue={3} />
            <InputNumber style={inputStyle} size="small" min={1} max={100000} defaultValue={3} />
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
        </Row>
      </div>
    );
  }
}
