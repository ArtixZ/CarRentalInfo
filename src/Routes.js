import React, { Component } from 'react';
import { Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import Header from './components/Header';
import Home from './components/Home';
import './index.css';

export default class Routes extends Component {
  render() {
    return (
      <LocaleProvider locale={enUS}>
        <Router history={browserHistory}>
          <Route path="/" component={Header}>
            <IndexRoute component={Home}/>
            <Route path="home" component={Home} />
          </Route>
        </Router>
      </LocaleProvider>
    );
  }
}
