import React from 'react';
import { Tabs, Icon } from 'antd';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/tomorrow';
const TabPane = Tabs.TabPane;

const sample =
`<Dropdown overlay={dropdownMenu} style={{paddingTop: '1em'}}>
  <a className="ant-dropdown-link" href="#">
    Cascading menu <Icon type="down" />
  </a>
</Dropdown>`;

export default class CodeDesignPreview extends React.Component {
  render() {
    return (
      <div className="card-container tab-wrapper">
        <Tabs type="card">
          <TabPane tab="Design" key="1">
            <p>Content of Tab Pane 1</p>
            <p>Content of Tab Pane 1</p>
            <p>Content of Tab Pane 1</p>
          </TabPane>

          <TabPane tab="Code" key="2">
            <AceEditor
              defaultValue={sample}
              readOnly={true}
              mode="javascript"
              theme="tomorrow"
              highlightActiveLine={false}
              name="UNIQUE_ID_OF_DIV"
              setOptions={{ useWorker: false, showLineNumbers: false, highlightActiveLine: false }}
            />,
          </TabPane>
        </Tabs>
      </div>
    )
  }
}
