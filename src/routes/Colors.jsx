import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';

export default class Colors extends Component {

  state = {

  }

  render() {

    return (
      <div style={{marginBottom: 200}}>
        <Row gutter={24}>
          <Col span={24}>
            <h2>Grey colors</h2>
            <p className="system-medium">Less variables, with their corresponding hex codes</p>
            <div className="thumb-image">
              <img src="../../colors.png" alt="grey colors" />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}
