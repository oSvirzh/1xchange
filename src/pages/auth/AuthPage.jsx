import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { RouteConfig } from '../../config/routeConfig';
import { createAccountFlow } from './flows';
import LayoutAuth from '../../components/layout/auth/LayoutAuth';
import { SidebarCmp } from '../../components/layout/auth/Sidebar';
import AuthStep from './AuthStep';

export const AuthPage = () => (
  <LayoutAuth renderLeft={<SidebarCmp activeStep={0} />}>
    <Switch>
      <Route exact path={RouteConfig.register}>
        <AuthStep {...createAccountFlow} />
      </Route>
      <Route exact path={RouteConfig.login}>
        <AuthStep {...createAccountFlow} />
      </Route>
    </Switch>
  </LayoutAuth>
);
