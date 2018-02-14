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
  	<BeeLayout router={browserHistory}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/principles" component={Principles} />
        <Route exact path="/guidelines" component={Guidelines} />
        <Route exact path="/styles" component={Styles} />
        <Route exact path="/components-analyze" component={Components} />
        <Route exact path="/components-configure" component={Components} />
        <Route exact path="/components-indicate" component={Components} />
        <Route exact path="/components-monitor" component={Components} />
        <Route exact path="/components-navigate" component={Components} />
        <Route exact path="/login" component={LoginManager} />
        <Route path="*" component={Components} />
      </Switch>
    </BeeLayout>
  </Router>
);
