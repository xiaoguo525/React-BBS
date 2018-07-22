import React, { Component } from 'react';
import { Tabs } from 'antd';
import './index.css'
import News from './news/news.js';
import Books from './books/books.js';
import Community from './community/community.js';
import InterestBooks from './interestBooks/interestBooks.js';
const TabPane = Tabs.TabPane;

export default class Mobile extends Component {
  render() {
    return (<div>
    			<h2 className='mobile-title'>手机导航</h2>
    			<Tabs className='mobile-tags' defaultActiveKey="1" >
				    <TabPane tab="最新动态" key="1"><News /></TabPane>
				    <TabPane tab="热门书籍" key="2"><Books /></TabPane>
				    <TabPane tab="社区部落" key="3"><Community /></TabPane>
				    <TabPane tab="兴趣书籍" key="4"><InterestBooks /></TabPane>
				</Tabs>
			</div>)
  }
}

