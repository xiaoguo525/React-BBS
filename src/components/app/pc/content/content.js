import React, { Component } from 'react';
import './content.css';
import ASider from './asider/asider.js';
import Center from './center/center.js';
import Header from './header/header.js';
import {Row,Col} from 'antd'

export default class Content extends Component {
  render() {
    return (
      <div className="content">
      		<Header />
      		<Row>
      			<Col span={17}>
	      			<Center />
      			</Col>
      			<Col span={7}>
	      			<ASider />
	      		</Col>
      		</Row>
      </div>
    );
  }
}

