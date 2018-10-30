import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import {
    HashRouter, Route, Switch
} from 'react-router-dom';
import store from './store';

import Layout from './components/Layout/Layout';

import Home from './components/Home';
import ChartContainer from './containers/ChartContainer';
import './styles/index.css';


render((
  <Provider store={store}>
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chart" component={ChartContainer} />
        </Switch>
      </Layout>
    </HashRouter>
  </Provider>
), document.getElementById('root'));
