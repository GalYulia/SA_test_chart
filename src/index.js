import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch, browserHistory } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import ChartLayout from './components/ChartLayout/ChartLayout';
import UserListContainer from './components/UserListContainer/UserListContainer';

import Home from './components/Home';


// import './index.css';
// import './styles/globalStyles.css';


render((
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <ChartLayout>
          <Route path="/users" component={UserListContainer} />
        </ChartLayout>
      </Switch>
    </Layout>
  </BrowserRouter>
), document.getElementById('root'));
