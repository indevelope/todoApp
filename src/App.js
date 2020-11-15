import React from 'react';

import { Router, Route, Switch } from 'react-router-dom';

import { createBrowserHistory } from 'history';

import Contacts from './pages/Contacts';
import TodoApp from './pages/TodoApp';

const browserHistory = createBrowserHistory();

const App = (props) => {
  const history = props.history || browserHistory;

  return (
    <Router history={history}>
      <Switch>
        <Route path='/' strict exact component={TodoApp} />
        <Route path='/contacts' strict exact component={Contacts} />
      </Switch>
    </Router>
  );
}

export default App;