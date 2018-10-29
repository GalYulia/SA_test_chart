import React from 'react';
import { render } from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";
import {
  BrowserRouter, Route, Switch, browserHistory,
} from 'react-router-dom';

import Layout from './components/Layout';

import Home from './components/Home';
import ChartContainer from "./containers/ChartContainer";

render((
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/report" component={ChartContainer} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
), document.getElementById('root'));
