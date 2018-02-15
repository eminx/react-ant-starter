import React, { Component } from 'react';
import { Affix, Row, Col, Tabs, Popconfirm, Menu, Dropdown, Icon, Divider, Input, InputNumber, Radio, Switch, Checkbox, AutoComplete, Cascader, Popover, Button } from 'antd';
import CodeDesignPreview from '../Reusables/CodeDesignPreview';
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;

const headingsDesign =
<div>
  <h3>Heading 1</h3>
  <p>
    Use <b>h1</b> very cautiously as it is designed to reflect the most important aspect
    at a given page, which is already provided at the header as title. Besides heading 1
    automatically is assigned the given primary/brand color. You may change it, but revisit
    if you could actually get around with h2 instead. Do not use h1 more than 3 times at one page,
    unless it is a blog post-thread.
  </p>
  <h3>Heading 2</h3>
  <p>
    Use <b>h2</b> for entitling sections/widgets that help users configure or analyse. The
    amount of h2s used at one page should also be limited and it probably means that you
    need another page to accommodate your further needs.
  </p>
  <h3>Heading 3</h3>
  <p>
    Use <b>h3</b> for entitling any stack of information or operation within your
    widgets/sections. It can be used exhaustively, but must keep relevance to its related
    content. Try to keep them in a certain proximitywith each other when they are related.
  </p>
</div>;

const headingsCode = `
<h1>Headings for the Plants</h1>
<h2>Headings for the Bugs</h2>
<h3>Headings for the People</h3>
`;


export default class Typography extends Component {

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
        <h1>Styles for implementing typography</h1>
        <h2>Headings</h2>
        <Row type="flex" gutter={24}>
          <Col span={12} >
            <CodeDesignPreview design={headingsDesign} code={headingsCode} />
          </Col>
          <Col span={12}>
            <div className="displayCard">
              <h3>Heading 1</h3>
              <h1>This is Heading 1</h1>
              <Divider />

              <h3>Heading 2</h3>
              <h2>This is Heading 2</h2>
              <Divider />

              <h3>Heading 3</h3>
              <h3>This is Heading 3</h3>
            </div>
            <Divider />
          </Col>
        </Row>

        <Divider />

        <h2>Paragraph, Body, Main</h2>
        <Row type="flex" gutter={24}>
          <Col span={12} >
            <CodeDesignPreview design={headingsDesign} code={headingsCode} />
          </Col>
          <Col span={12} >
            <h3>Paragraph</h3>
            <div className="displayCard">
              <p>
                Any examination of a given epic form is concerned with the
                relationship of this form to historiography. In fact, one may go
                even further and raise the question whether historiography does
                not constitute the common ground of all forms of the epic. Then
                written history would be in the same relationship to the epic
                forms as white light is to the colors of the spectrum.
              </p>
            </div>
            <div style={{padding: 16}}>
              <p>
                However this may be, among all forms of the epic there is not one whose
                incidence in the pure, colorless light of written history is more
                certain than the chronicle. And in the broad spectrum of the
                chronicle the ways in which a story can be told are graduated like
                shadings of one and the same color. The chronicler is the historyteller.
              </p>
            </div>
          </Col>
        </Row>

        <Divider />

        <h2>Anchor (links)</h2>
        <Row type="flex" gutter={24}>
          <Col span={12} >
            <CodeDesignPreview design={headingsDesign} code={headingsCode} />
          </Col>
          <Col span={12}>
            <h3>h1</h3>
            <h1>This is Heading 1</h1>
            <Divider />

            <h3>h2</h3>
            <h2>This is Heading 2</h2>
            <Divider />

            <h3>h3</h3>
            <h3>This is Heading 3</h3>
            <Divider />
          </Col>
        </Row>

        <Divider />

        <h2>Paddings</h2>
        <Row type="flex" gutter={24}>
          <Col span={12} >
            <CodeDesignPreview design={headingsDesign} code={headingsCode} />
          </Col>
          <Col span={12}>
            <h3>h1</h3>
            <h1>This is Heading 1</h1>
            <Divider />

            <h3>h2</h3>
            <h2>This is Heading 2</h2>
            <Divider />

            <h3>h3</h3>
            <h3>This is Heading 3</h3>
            <Divider />
          </Col>
        </Row>

        <Divider />

        <h2>Fonts</h2>
        <Row type="flex" gutter={24}>
          <Col span={12} >
            <CodeDesignPreview design={headingsDesign} code={headingsCode} />
          </Col>
          <Col span={12}>
            <h3>h1</h3>
            <h1>This is Heading 1</h1>
            <Divider />

            <h3>h2</h3>
            <h2>This is Heading 2</h2>
            <Divider />

            <h3>h3</h3>
            <h3>This is Heading 3</h3>
            <Divider />
          </Col>
        </Row>
      </div>
    )
  }
}
