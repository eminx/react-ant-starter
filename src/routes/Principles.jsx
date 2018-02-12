import React, { Component } from 'react';
import { List } from 'antd';

export default class Principles extends Component {
  render() {
    return (
      <div style={{height: '100%', marginBottom: 100}}>
        <div className="displayCard" style={{width: '62%'}}>
          <List>
            <List.Item>
              <h2>Consistency</h2>
              <p>Display and navigate with consistency within and across apps/platforms.</p>
            </List.Item>
            <List.Item>
              <h2>Comfortable & Oriented</h2>
              <p>Provide efficient and effective perception and actions. The content shall be easily readable, and editable.</p>
            </List.Item>
            <List.Item>
              <h2>Overview & Detail</h2>
              <p>Keep user subject to a well-provided overview of the entire application, even when she's working on a specific task.</p>
            </List.Item>
            <List.Item>
              <h2>Scalable</h2>
              <p>The Design System will scale (both for Dazzler, MZ, and other future DR projects)</p>
            </List.Item>
            <List.Item>
              <h2>Transparent communication</h2>
              <p>Be transparent and direct about what you need and your intent from the user for a particular, given task.</p>
            </List.Item>
            <List.Item>
              <h2>Respect complexity</h2>
              <p>Don’t undermine the complexity of any given task; rather emphasize its sophistication and don't complicate more</p>
            </List.Item>
            <List.Item>
              <h2>Harmonic organisation</h2>
              <p>Elements should be organised in a harmonic, relational and reasonable way in relation to each other</p>
            </List.Item>
            <List.Item>
              <h2>Intuitive & sensible</h2>
              <p>Provide a sensible, intuitive navigation with powerful and stateful tools - <i>i.e. smart-search</i></p>
            </List.Item>
          </List>
        </div>
      </div>
    );
  }
}
