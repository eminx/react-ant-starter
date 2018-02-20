import React from 'react';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;

export default class DazzlerTabs extends React.Component {
  render() {
    const { contentItems } = this.props;

    return (
      <div className="card-container tab-wrapper">
        <Tabs type="card">
          { contentItems.map((item, i) => (
            <TabPane tab={item.title} key={item.title + i}>
              {item.contentNode}
            </TabPane>
          ))}
        </Tabs>
      </div>
    )
  }
}

DazzlerTabs.propTypes = {
  contentItems: PropTypes.array.isRequired
}
