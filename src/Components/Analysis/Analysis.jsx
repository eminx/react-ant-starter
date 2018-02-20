import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server'
import { Row, Col, Table, Button } from 'antd';
import CodeDesignPreview from '../../Reusables/CodeDesignPreview';
import { dataBasic, columnsBasic, dataFilter, columnsFilter, columnsBordered, dataBordered } from './Tables';

const columns = [{
  title: 'Name',
  dataIndex: 'name',
  width: 150,
}, {
  title: 'Age',
  dataIndex: 'age',
  width: 150,
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const tableDesign = <div>
  <p>
    For tables, refer to Ant Design specification. Whichever table you choose will be rendered with consistent styling,
    with the already built-in style files provided.
  </p>
</div>

const tableCode = `
<Table
  columns={columns}
  dataSource={data}
  pagination={{ pageSize: 50 }}
  scroll={{ y: 240 }}
/>
`

export default class Analysis extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };
  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }
  clearFilters = () => {
    this.setState({ filteredInfo: null });
  }
  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  }
  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  }

  render() {

    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};

    const columnsFilter = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filters: [
        { text: 'Joe', value: 'Joe' },
        { text: 'Jim', value: 'Jim' },
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
    }, {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
      filters: [
        { text: 'London', value: 'London' },
        { text: 'New York', value: 'New York' },
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
    }];

    return (
      <div>
        <Row gutter={24}>
          <Col span={9}>
            <CodeDesignPreview design={tableDesign} code={tableCode} />
          </Col>
          <Col span={15}>
            <Table
              columns={columnsFilter}
              dataSource={dataFilter}
              pagination={{ pageSize: 50 }}
              scroll={{ y: 240 }}
            />
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={9}>
            <CodeDesignPreview design={tableDesign} code={tableCode} />
          </Col>
          <Col span={15}>
            <div className="table-operations">
              <Button onClick={this.setAgeSort}>Sort age</Button>
              <Button onClick={this.clearFilters}>Clear filters</Button>
              <Button onClick={this.clearAll}>Clear filters and sorters</Button>
            </div>
            <Table columns={columnsFilter} dataSource={dataFilter} onChange={this.handleChange} />
          </Col>
        </Row>

        <Row gutter={24}>
          <Col span={9}>
            <CodeDesignPreview design={tableDesign} code={tableCode} />
          </Col>
          <Col span={15}>
            <Table
              columns={columnsBordered}
              dataSource={dataBordered}
              bordered
              title={() => 'Header'}
              footer={() => 'Footer'}
            />
          </Col>
        </Row>
      </div>
    )
  }
}
