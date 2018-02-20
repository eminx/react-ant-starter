import React, { Component } from 'react';
import { List } from 'antd';
import { designGuidelines } from './design-guidelines';

const ListItem = List.Item;

export default class Guidelines extends Component {
  render() {
    return (
      <div style={{height: '100%'}}>
        <div className="displayCard" style={{width: '62%'}}>
          Content will come soon.
        </div>
      </div>
    );
  }
}
