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

import Colors from './Colors';
import Layout from './Layout';
import Navigation from './Navigation';
import Typography from './Typography';

import Analysis from '../Components/Analysis/Analysis';
import Configuration from '../Components/Configuration/Configuration';
import Indication from '../Components/Indication/Indication';
import NavigationComponents from '../Components/Navigation/Navigation';

const browserHistory = createBrowserHistory();

export const renderRoutes = () => (
  <Router history={browserHistory}>
  	<BeeLayout router={browserHistory}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/color-styles" component={Colors} />
        <Route exact path="/layout-styles" component={Layout} />
        <Route exact path="/navigation-styles" component={Navigation} />
        <Route exact path="/typography-styles" component={Typography} />

        <Route exact path="/analysis-components" component={Analysis} />
        <Route exact path="/configuration-components" component={Configuration} />
        <Route exact path="/indication-components" component={Indication} />
        <Route exact path="/navigation-components" component={NavigationComponents} />

        <Route exact path="/principles" component={Principles} />
        <Route exact path="/guidelines" component={Guidelines} />

        <Route exact path="/login" component={LoginManager} />
        <Route path="*" component={Components} />
      </Switch>
    </BeeLayout>
  </Router>
);
