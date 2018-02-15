import React, { Component } from 'react';
import Configuration from './Configuration/Configuration';

export default class ComponentsIndex extends Component {

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
        <Configuration />
      </div>
    );
  }
}
