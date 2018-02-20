import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server'
import { Table } from 'antd';


// Basic Table
const columnsBasic = [{
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

const dataBasic = [];
for (let i = 0; i < 100; i++) {
  dataBasic.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

const tableBasicDesign = <div>
  <p>
    For tables, refer to Ant Design specification. Whichever table you choose will be rendered with consistent styling,
    with the already built-in style files provided.
  </p>
</div>

const tableBasicCode = <Table columns={columnsBasic} dataSource={dataBasic} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />;


// Filterable/Reorderable

const dataFilter = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Jim Red',
  age: 32,
  address: 'London No. 2 Lake Park',
}];


// With header, footer and border

const columnsBordered = [{
  title: 'Name',
  dataIndex: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Cash Assets',
  className: 'column-money',
  dataIndex: 'money',
}, {
  title: 'Address',
  dataIndex: 'address',
}];

const dataBordered = [{
  key: '1',
  name: 'John Brown',
  money: '￥300,000.00',
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  money: '￥1,256,000.00',
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  money: '￥120,000.00',
  address: 'Sidney No. 1 Lake Park',
}];


export { dataBasic, columnsBasic, dataFilter, columnsBordered, dataBordered };
