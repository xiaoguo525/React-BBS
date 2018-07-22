import React, { Component } from 'react';
import PC from './index.js';
import Search from './search/search.js';
import {HashRouter,Switch,Route} from 'react-router-dom'

export default class PCRouter extends Component {
  render() {
    return (<div>
				<HashRouter>
		            <Switch>
		                <Route exact path='/' component={PC} />
		                <Route path='/search/:keys' component={Search} />
		            </Switch>
		        </HashRouter>
			</div>)
  }
}

