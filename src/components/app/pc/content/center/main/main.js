import React, { Component } from 'react';
import './main.css';
import News from './news/news.js';
import Books from './books/books.js';
import {Tabs,Icon} from 'antd';
const TabPane =Tabs.TabPane;


export default class Main extends Component {
  render() {
    return (
      <div className="main">
          <Tabs  type="card">
    			    <TabPane tab={<span><Icon type="wechat" />最新动态</span>}  key="1"><News  /></TabPane>
    			    <TabPane tab={<span><Icon type="book" />热门书籍</span>}  key="2"><Books  /></TabPane>
    		  </Tabs>
      </div>
    );
  }
}

