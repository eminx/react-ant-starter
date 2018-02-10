import React from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import BeeLayout from '../bee/Layout';

// route components
import Home from './Home';
import Principles from './Principles';
import Guidelines from './Guidelines';
import Styles from './Styles';
import Components from './Components';
import LoginManager from './LoginManager';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
  	<BeeLayout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/principles" component={Principles} />
        <Route exact path="/guidelines" component={Guidelines} />
        <Route exact path="/styles" component={Styles} />
        <Route exact path="/components" component={Components} />
        <Route exact path="/login" component={LoginManager} />
        <Route path="*" component={LoginManager} />
      </Switch>
    </BeeLayout>
  </Router>
);
