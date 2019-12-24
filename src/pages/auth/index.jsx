import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { RouteConfig } from '../../config/routeConfig';
import { Register } from './Register';
import { Login } from './Login';

export const AuthSection = () => (
  <Switch>
    <Route path={RouteConfig.register} component={Register} />
    <Route path={RouteConfig.login} component={Login} />
    <Redirect to={RouteConfig.login} />
  </Switch>
);
