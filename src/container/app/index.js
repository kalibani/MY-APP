import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

import * as AppRoutes from 'container/config';

import { Login, Dashboard } from 'container/pages';

const App = () => (
  <Router>
    <Switch>
      <Route
        exact
        path={AppRoutes.Login}
        component={Login}
      />
      <Route
        exact
        path={AppRoutes.Dashboard}
        component={Dashboard}
      />
      <Redirect from="*" to="/error-404" />
    </Switch>
  </Router>
);

export default App;
