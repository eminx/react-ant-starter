import React, { Component } from 'react';
import { Row, Col, Divider, Alert, Button, Tooltip, Progress, message, notification } from 'antd';
import CodeDesignPreview from '../../Reusables/CodeDesignPreview';

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

const success = () => {
  message.success('This is a message of success');
};

const error = () => {
  message.error('This is a message of error');
};

const warning = () => {
  message.warning('This is message of warning');
};

const openNotificationWithIcon = (type) => {
  notification[type]({
    message: 'Notification Title',
    description: 'This is the content of the notification. You can insert here anything',
  });
};

export default class Indication extends Component {
  render() {
    return (
      <div>
      	<h2>Error/Success/Warning messages</h2>
        <p>Tables are the most common way to display a large sets of data in relation to each other, to provide quick overview & analysis</p>
        <p>Below you will find several examples of table components styled up for Digital Route.</p>
        <Divider />
        <h3>Contextual messages</h3>
        <Row gutter={24}>
          <Col span={9}>
            <CodeDesignPreview design={tableDesign} code={tableCode} />
          </Col>
          <Col span={15}>
          	<div>
					    <Alert message="Success Tips" type="success" showIcon closable />
					    <Alert message="Informational Notes" type="info" showIcon closable />
					    <Alert message="Warning" type="warning" showIcon closable />
					    <Alert message="Error" type="error" showIcon closable />
					    <Alert
					      message="Success Tips"
					      description="Detailed description and advices about successful copywriting."
					      type="success"
					      showIcon closable
					    />
					    <Alert
					      message="Informational Notes"
					      description="Additional description and informations about copywriting."
					      type="info"
					      showIcon closable
					    />
					    <Alert
					      message="Warning"
					      description="This is a warning notice about copywriting."
					      type="warning"
					      showIcon closable
					    />
					    <Alert
					      message="Error"
					      description="This is an error message about copywriting."
					      type="error"
					      showIcon closable
					    />
					  </div>
          </Col>
        </Row>

        <Divider />

        <h3>Global messages - short</h3>
        <Row gutter={24}>
          <Col span={9}>
            <CodeDesignPreview design={tableDesign} code={tableCode} />
          </Col>
          <Col span={15}>
	          <div style={{marginBottom: 14, display: 'flex', justifyContent: 'space-evenly'}}>
	          	<Button onClick={success}>Success</Button>
					    <Button onClick={error}>Error</Button>
					    <Button onClick={warning}>Warning</Button>
					   </div>
          </Col>
        </Row>

        <Divider />

        <h3>Global messages - detailed</h3>
        <Row gutter={24}>
          <Col span={9}>
            <CodeDesignPreview design={tableDesign} code={tableCode} />
          </Col>
          <Col span={15}>
          	<div style={{marginBottom: 14, display: 'flex', justifyContent: 'space-evenly'}}>
					    <Button onClick={() => openNotificationWithIcon('success')}>Success</Button>
					    <Button onClick={() => openNotificationWithIcon('info')}>Info</Button>
					    <Button onClick={() => openNotificationWithIcon('warning')}>Warning</Button>
					    <Button onClick={() => openNotificationWithIcon('error')}>Error</Button>
					  </div>
          </Col>
        </Row>

        <Divider />
        
        <h2>Progress</h2>
        <Row gutter={24}>
          <Col span={9}>
            <CodeDesignPreview design={tableDesign} code={tableCode} />
          </Col>
          <Col span={15}>
          	<div style={{marginBottom: 14, display: 'flex', justifyContent: 'space-evenly', marginBottom: 60}}>
					   	<Progress type="circle" percent={30} width={80} />
					    <Progress type="circle" percent={70} width={80} status="exception" />
					    <Progress type="circle" percent={100} width={80} />
					  </div>
					  <div>
					  	<div style={{display: 'flex', marginBottom: 30}}>
						  	<span style={{flexBasis: 150}}> Regular: </span>
						  	<Progress percent={30} />
						  </div>
						  <div style={{display: 'flex', marginBottom: 30}}>
					    	<span style={{flexBasis: 150}}> Active: </span>
					    	<Progress percent={50} status="active" />
					    </div>
					    <div style={{display: 'flex', marginBottom: 30}}>
					    	<span style={{flexBasis: 150}}> Exception: </span>
					    	<Progress percent={70} status="exception" />
					    </div>
					    <div style={{display: 'flex', marginBottom: 30}}>
					    	<span style={{flexBasis: 150}}> Full </span>
						    <Progress percent={100} />
						  </div>
					    <div style={{display: 'flex', marginBottom: 30}}>
					    	<span style={{flexBasis: 150}}> No info: </span>
					    	<Progress percent={50} showInfo={false} />
					    </div>
					  </div>
          </Col>
        </Row>

        <Divider />
        
        <h2>Tooltip</h2>
        <Row gutter={24}>
          <Col span={9}>
            <CodeDesignPreview design={tableDesign} code={tableCode} />
          </Col>
          <Col span={15}>
          	<div style={{marginBottom: 30, display: 'flex', justifyContent: 'space-evenly'}}>
	        		<Tooltip title="any text that explains something">
						    <span>mouse enter</span>
						  </Tooltip>

						  <Tooltip title="any text that explains something" placement="bottom">
						    <span>can appear below</span>
						  </Tooltip>

						  <Tooltip title="any text that explains something" placement="topRight">
						    <span>can appear anywhere</span>
						  </Tooltip>
						</div>
          	
          	<div style={{marginBottom: 30, display: 'flex', justifyContent: 'space-evenly'}}>
							<Tooltip title="a button" placement="bottomRight">
						  	<Button>Button</Button>
						  </Tooltip>

						  <Tooltip title="prompt text" placement="bottom">
						  	<Button>Button</Button>
						  </Tooltip>

						  <Tooltip title="arrow pointing to center" placement="bottomLeft" arrowPointAtCenter>
						  	<Button>Button</Button>
						  </Tooltip>
						</div>
          </Col>
        </Row>

      </div>
    )
  }
}
