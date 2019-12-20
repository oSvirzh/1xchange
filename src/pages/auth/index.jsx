import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { RouteConfig } from '../../config/routeConfig';
import { AuthPage } from './AuthPage';

export const AuthSection = () => (
  <Switch>
    <Route path={RouteConfig.auth} component={AuthPage} />
    <Redirect to={RouteConfig.auth} />
  </Switch>
);
