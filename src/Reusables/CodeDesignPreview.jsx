import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Icon } from 'antd';
import brace from 'brace';
import AceEditor from 'react-ace';
import 'brace/mode/javascript';
import 'brace/theme/textmate';
const TabPane = Tabs.TabPane;

export default class CodeDesignPreview extends React.Component {
  render() {
    const { design, code } = this.props;

    return (
      <div className="card-container tab-wrapper">
        <Tabs type="card">
          <TabPane tab="Design" key="1">
            {design}
          </TabPane>

          <TabPane tab="Code" key="2" >
            <AceEditor
              defaultValue={code}
              readOnly={true}
              mode="javascript"
              theme="textmate"
              highlightActiveLine={false}
              name="UNIQUE_ID_OF_DIV"
              setOptions={{ useWorker: false, showLineNumbers: false, highlightActiveLine: false }}
            />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

CodeDesignPreview.propTypes = {
  design: PropTypes.node.isRequired,
  code: PropTypes.string.isRequired
}
