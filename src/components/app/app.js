import React, { Component } from 'react';
import './app.css';
import PCRouter from './pc/pc-router.js';
import Mobile from './mobile/index.js';
import 'antd/dist/antd.css'
import MediaQuery from 'react-responsive';


export default class App extends Component {
  render() {
    return (<div>
			<MediaQuery query='(min-device-width:980px)'>
				<PCRouter />
			</MediaQuery>
			<MediaQuery query='(max-device-width:780px)'>
				<Mobile />
			</MediaQuery>
		</div>)
  }
}

