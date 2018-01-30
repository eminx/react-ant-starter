import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

// route components
import App from '../App';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
  	<Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/app" component={App} />
      {/*<Route path="*" component={NotFoundPage} />*/}
    </Switch>
  </Router>
);
