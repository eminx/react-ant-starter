import React, { Component } from 'react';
import { Affix, Row, Col, Tabs, Popconfirm, Menu, Dropdown, Icon, Divider, Input, InputNumber, Radio, Switch, Checkbox, AutoComplete, Cascader, Popover, Button } from 'antd';
import CodeDesignPreview from '../Reusables/CodeDesignPreview';
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const SubMenu = Menu.SubMenu;
const TabPane = Tabs.TabPane;

const headingsDesign =
<div>
  <h3>Using heading 1</h3>
  <p>
    Use <b>h1</b> very cautiously as it is designed to reflect the most important aspect
    at a given page, which is already provided at the header as title. Besides heading 1
    automatically is assigned the given primary/brand color. You may change it, but revisit
    if you could actually get around with h2 instead. Do not use h1 more than 3 times at one page,
    unless it is a blog post-thread.
  </p>

  <h3>Using heading 2</h3>
  <p>
    Use <b>h2</b> for entitling sections/widgets that help users configure or analyse. The
    amount of h2s used at one page should also be limited and it probably means that you
    need another page to accommodate your further needs.
  </p>

  <h3>Using heading 3</h3>
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

const paragraphDesign = <div>
  <p>
    Usage of pure text just about anywhere is discouraged. Rather emphasize it to use within a
    display context where it appears within another component, for example this very tab-card.
  </p>
  <p>
    If the content of a certain display object is primarily and directly related to the
    router-page context, use the "system-medium" font. Otherwise, use "system-light".
  </p>
</div>

const paragraphCode = `
<p>
  Any examination of a given epic form is concerned with the
  relationship of this form to historiography. In fact, one may go
  even further and raise the question whether historiography does
  not constitute the common ground of all forms of the epic. Then
  written history would be in the same relationship to the epic
  forms as white light is to the colors of the spectrum.
</p>
`;

const anchorDesign = <div>
  <p>
    Anchors should be used within or without any body text/paragraph. Often, if
    you only need to provide an example of where to lead the user, either for
    navigation or a simple feature; consider using anchors instead of buttons.
    The reason for that is over-usage of buttons provide as if there's a competition,
    and then appearance could easily feel manipulative.
  </p>
  <h3>Rules</h3>
  <code>
    font-family: 'system-light'; <br />
    color: @blue; <br />
    &:hover: border-bottom: 1px solid @blue;
    margin-right: 4px; <br />
    margin-left: 4px;
  </code>
</div>

const anchorCode = `
  <p><a href="#">This is a link</a></p>
  <p>
    Anchors can be amazing. If you really don't believe me,
    <a href="https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt">click and read</a>
    what Tim Berners-Lee had to say about them.
  </p>
  <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" target="_blank">Learn more</a>
`;

const fontsDesign = <div>
  <h3>System fonts</h3>
  <p>
    System fonts are an operating system's most widely used fonts, and they are
    extremely improved for readability. Many web applications such as Github, Medium and Booking.com
    make extensive use of system fonts for their users. Users are very used to reading a system font
    because that's the default font of their OS. Besides, the performance of it is very fast and optimised.
  </p>
  <p>
    However, there's one variatation for <b>h1</b> element and navigation main category label. They use the Digital Route branding
    font: <code>Titillium Web</code>
  </p>
  <p>
    There provided three different font declarations in the css. So instead of using <code>font-weight</code>,
    refer to using either of these fonts with <code>font-family</code>, which are: <code>system-light</code>, <code>system-medium</code> and <code>system-bold</code>
  </p>
</div>

const fontsCode = `
  h1 {
    font-family: 'system-light';

    &.page-title {
      font-family: 'system-bold';
    }
  }

  p {
    font-family: 'system-medium';
  }
`;

const paddingsDesign = <div>
  <p>
    Paddings between columns: <br />
    <code>24px</code>
  </p>
  <Divider />
  <p>
    For other paddings, refer to Ant Design documentation.
  </p>
</div>

const paddingsCode = `
  // see "guttter" here. that's the padding.
  <Row type="flex" gutter={24}>
    <Col span={12}>
      <Affix offsetTop={87}>
        <CodeDesignPreview
          design={formDesign}
          code={dropdownCode}
        />
      </Affix>
    </Col>
    ...
  </Row>
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
            <h3>Examples: h1, h2, h3</h3>
            <div className="displayCard">
              <h1>This is Heading 1</h1>
              <Divider />

              <h2>This is Heading 2</h2>
              <Divider />

              <h3>This is Heading 3</h3>
            </div>
            <Divider />
          </Col>
        </Row>

        <Divider />

        <h2>Paragraph, Body, Main</h2>
        <Row type="flex" gutter={24}>
          <Col span={12} >
            <CodeDesignPreview design={paragraphDesign} code={paragraphCode} />
          </Col>
          <Col span={12} >
            <h3>Example: paragraph</h3>
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
            <CodeDesignPreview design={anchorDesign} code={anchorCode} />
          </Col>
          <Col span={12}>
            <h3>Example: anchor</h3>
            <div className="displayCard">
              <p><a href="#">This is a link</a></p>
              <p>
                Anchors can be amazing. If you really don't believe me,
                 <a href="https://www.w3.org/MarkUp/draft-ietf-iiir-html-01.txt">click and read</a>
                what Tim Berners-Lee had to say about them.
              </p>
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a" target="_blank">Learn more</a>
            </div>
            <Divider />
          </Col>
        </Row>

        <Divider />

        <h2>Paddings</h2>
        <Row type="flex" gutter={24}>
          <Col span={12} >
            <CodeDesignPreview design={paddingsDesign} code={paddingsCode} />
          </Col>
          <Col span={12}>

          </Col>
        </Row>

        <Divider />

        <h2>Fonts</h2>
        <Row type="flex" gutter={24}>
          <Col span={12} >
            <CodeDesignPreview design={fontsDesign} code={fontsCode} />
          </Col>
          <Col span={12}>
            <div className="displayCard">
              <p style={{fontFamily: 'system-light'}}>This is a system font in light weight (300)</p>
              <p style={{fontFamily: 'system-medium'}}>This is a system font in medium weight (400)</p>
              <p style={{fontFamily: 'system-bold'}}>This is a system font in bold weight (700)</p>
              <h1>This is a Titillium Web font as header</h1>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
