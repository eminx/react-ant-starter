import React, { Component } from 'react';
import { Row, Col, Divider, List } from 'antd';
const ListItem = List.Item;

export default class Navigation extends Component {

  state = {

  }

  render() {

    return (
      <div style={{marginBottom: 200}}>
        <h2>Main navigation</h2>
        <Row gutter={24} >
          <h3>Elements composing the navigation</h3>
          <Col span={9} >
            <div class="thumb-image">
			      	<img src="../../navigation-details.png" />
			      </div>
          </Col>
          <Col span={14} >
            <p className="system-medium">
              Main navigation is composed of three different parts:
            </p>
            <List>
              <ListItem>
                <strong>Menu-item</strong>
                <p>
                  This element is the main navigation item. It is the only clickable item that runs the action to go to another page.
                </p>
                <p>
                  If there's no menu enclosing this element; in other words if this is not a child of a collapsable menu, it must have
                  an icon attached to it for visualisation purposes, on navigation collapse by clicking the button (on mobile and on-demand).
                </p>
              </ListItem>
              <ListItem>
                <strong>Menu</strong> (optional)
                <p>
                  This element is to be used as a wrapper, when there's more than 6 menu-items to be clicked.
                  It must accommodate some relevance to its enclosing menu-items.
                </p>
                <p>
                  If this element is used, it must have an icon for
                  visualisation purposes.
                </p>
                <p>
                  It only expands or collapses when clicked to allow navigating to its children. It is optional to use when necessary.
                </p>
              </ListItem>
              <ListItem>
                <strong>Menu category</strong> (optional)
                <p>
                  Similar to the "menu" as explained above, this is a category item intended to be used when there's a lot of content
                  in an application, and thus navigation items. This is encouraged to use to also help user make sense of the overall
                  application as a helper to the rest of the navigation items. It requires some work of delivering
                  Information Architecture.
                </p>
                <p>
                  It is not clickable, and meant to be there only to support its enclosing elements. It can be dismissed
                  as it is also optional.
                </p>
              </ListItem>
            </List>
          </Col>
        </Row>

        <Divider />
        <Row>
        	<Col span={15}>
		        <h2>Variant use-cases</h2>
		        <p className="system-medium">
		        	Below provided sample codes for using navigation for different purposes.
		        </p>
		      </Col>
	      </Row>


      	<Divider />

      </div>
    )
  }
}
