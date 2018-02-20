import React, { Component } from 'react';
import { Row, Col, Divider } from 'antd';

export default class Navigation extends Component {

  state = {

  }

  render() {

    return (
      <div style={{marginBottom: 200}}>
        <h2>Overview of the basic layout</h2>
        <Row type="flex" gutter={24}>
          <Col span={24} >
            <div className="thumb-image">
              <img src="../../layout.png" />
            </div>
          </Col>
        </Row>

        <Divider />
        <Row gutter={24}>
        	<Col span={15}>
		        <h2>Details</h2>
		        <p className="system-medium">
		        	The layout is designed to accommodate basic layout elements like logo, heading,
		        	navigations and a few helper widgets such as search, notifications etc.
		        </p>
		      </Col>
	      </Row>

				<Row gutter={24}>
					<Col span={15}>
		        <h3>Heading</h3>
		      	<p>
		      		Heading is supposed to include the page title, and that's it.
		      	</p>
		      </Col>
		      <Col span={9}>
		      	<div className="thumb-image" style={{marginTop: 50}}>
			      	<img src="../../layout-heading.png" />
			      </div>
		     	</Col>
	      </Row>

        <Divider />

				<Row gutter={24}>
					<Col span={15}>
		      	<h3>Extra elements</h3>
		      	<p>
		      		Extra elements are also part of the header, like heading. Starting from the most right-top part of a
		      		page, we can compose each of the extra elements from right to left, following the order of specificity to
		      		generality. Therefore we have put the "User-widget" to most right, and "Search" to most left.
		      	</p>
		      </Col>
		      <Col span={9}>
		      	<div className="thumb-image" style={{marginTop: 50}}>
			      	<img src="../../layout-extra.png" />
			      </div>
		     	</Col>
	      </Row>

        <Divider />

				<Row gutter={24}>
					<Col span={15} >
		      	<h3>Main navigation</h3>
		      	<p>
		      		Main navigation is the left sidebar where we include items to help users navigate to different content,
		      		as well as help them make sense of the overall application.
		      	</p>
		      	<p>
		      		It's assigned <code>max-width: 240px</code>, which shrinks automatically below 1280px - meaning the width of
		      		smallest computer's display.
		      	</p>
		      </Col>
		      <Col span={9}>
		      	<div className="thumb-image" style={{marginTop: 50}}>
			      	<img src="../../layout-navigation.png" />
			      </div>
		     	</Col>
	      </Row>

        <Divider />

				<Row gutter={24}>
					<Col span={15}>
		      	<h3>Main Content</h3>
		      	<p>
		      		Main content of the application is the main reason a user is at a given page, with the exception of the
		      		homepage/dashboard (where they land).
		      	</p>
		      	<p>
		      		The Content part is where varying types of data will be displayed. This is where the magic happens.
		      		The aim of utilising this space is to make sure it can scale no matter what we want to display, and also
		      		provide consistency in between pages and apps. Therefore there's a few of display types are suggested, using the
		      		<code> Grid</code> component from Ant Design specification.
		      	</p>
		      </Col>
		      <Col span={9}>
		      	<div className="thumb-image" style={{marginTop: 50}}>
			      	<img src="../../layout-content.png" />
			      </div>
		     	</Col>
	      </Row>


      	<Divider />

      </div>
    )
  }
}
