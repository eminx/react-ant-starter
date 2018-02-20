import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server'
import { Row, Col, Button, Divider, Timeline, Table, Collapse, } from 'antd';
import CodeDesignPreview from '../../Reusables/CodeDesignPreview';
import DazzlerTabs from '../../Reusables/DazzlerTabs';
import { dataBasic, columnsBasic, dataFilter, columnsFilter, columnsBordered, dataBordered, columnsFixed, dataFixed } from './Tables';
const Panel = Collapse.Panel;

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

const textPanel = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};

const contentItemsForTabs = [
  {
    title: 'A tab', // must be string
    contentNode: <p>You can provide a paragraph node</p>
  }, {
    title: 'Another tab',
    contentNode:
      <div>
        <h3>Or you can provide an h3 and a table</h3>
        <Table
          columns={columnsBasic}
          dataSource={dataBasic}
          pagination={{ pageSize: 50 }}
          scroll={{ y: 240 }}
        />
    </div>
  }, {
    title: 'Yet another tab',
    contentNode:
      <div>
        It can basically be any kind or a set of react components. Make sure to enclose it in <code>div</code> or so,
        if you use multiple of them.
      </div>
  }
]

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
        <h2>Tables</h2>
        <p>Tables are the most common way to display a large sets of data in relation to each other, to provide quick overview & analysis</p>
        <p>Below you will find several examples of table components styled up for Digital Route.</p>
        <Divider />
        <h3>Simple, with fixed header</h3>
        <Row gutter={24}>
          <Col span={9}>
            <CodeDesignPreview design={tableDesign} code={tableCode} />
          </Col>
          <Col span={15}>
            <Table
              columns={columnsBasic}
              dataSource={dataBasic}
              pagination={{ pageSize: 50 }}
              scroll={{ y: 240 }}
            />
          </Col>
        </Row>

        <Divider />

        <h3>Sortable & filterable</h3>
        <Row gutter={24}>
          <Col span={9}>
            <CodeDesignPreview design={tableDesign} code={tableCode} />
          </Col>
          <Col span={15}>
            <div style={{marginBottom: 14, display: 'flex', justifyContent: 'space-evenly'}}>
              <a onClick={this.setAgeSort}>Sort age</a>
              <a onClick={this.clearFilters}>Clear filters</a>
              <a onClick={this.clearAll}>Clear filters and sorters</a>
            </div>
            <Table columns={columnsFilter} dataSource={dataFilter} onChange={this.handleChange} />
          </Col>
        </Row>

        <Divider />
        <h3>With header, footer & bordered</h3>
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

        <Divider />

        <h3>Fixed and scrollable columns</h3>
        <Row gutter={24}>
          <Col span={9}>
            <CodeDesignPreview design={tableDesign} code={tableCode} />
          </Col>
          <Col span={15}>
            <Table
              columns={columnsFixed}
              dataSource={dataFixed}
              scroll={{ x: 800 }}
            />
          </Col>
        </Row>

        <Divider />

        <h2>Collapse</h2>
        <Row gutter={24}>
          <Col span={9}>
            <CodeDesignPreview design={tableDesign} code={tableCode} />
          </Col>
          <Col span={15}>
            <Collapse bordered={false} defaultActiveKey={['1']}>
              <Panel header="This is panel header 1" key="1" >
                <p>{textPanel}</p>
              </Panel>
              <Panel header="This is panel header 2" key="2" >
                <p>{textPanel}</p>
              </Panel>
              <Panel header="This is panel header 3" key="3" >
                <p>{textPanel}</p>
              </Panel>
            </Collapse>
          </Col>
        </Row>

        <Divider />

        <h2>Tabs</h2>
        <Row gutter={24}>
          <Col span={9}>
            <CodeDesignPreview design={tableDesign} code={tableCode} />
          </Col>
          <Col span={15}>
            <DazzlerTabs contentItems={contentItemsForTabs} />
          </Col>
        </Row>

        <Divider />

        <h2>Timeline</h2>
        <Row gutter={24}>
          <Col span={9}>
            <CodeDesignPreview design={tableDesign} code={tableCode} />
          </Col>
          <Col span={15}>
            <Timeline>
              <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item color="red">
                <p>Solve initial network problems 1</p>
                <p>Solve initial network problems 2</p>
                <p>Solve initial network problems 3 2015-09-01</p>
              </Timeline.Item>
              <Timeline.Item>
                <p>Technical testing 1</p>
                <p>Technical testing 2</p>
                <p>Technical testing 3 2015-09-01</p>
              </Timeline.Item>
            </Timeline>
          </Col>
        </Row>

      </div>
    )
  }
}
