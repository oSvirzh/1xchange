import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { RouteConfig } from '../../config/routeConfig';
import LayoutAuth from '../../components/layout/auth/LayoutAuth';
import { Sidebar } from '../../components/layout/auth/Sidebar';
import { CreateAccount, VerifyEmail, AuthCode } from './components';

export const Register = () => (
  <LayoutAuth renderLeft={<Sidebar />}>
    <Switch>
      <Route exact path={RouteConfig.register} component={CreateAccount} />
      <Route exact path={RouteConfig.verifyEmail} component={VerifyEmail} />
      <Route exact path={RouteConfig.verifyMobile} component={AuthCode} />
    </Switch>
  </LayoutAuth>
);
