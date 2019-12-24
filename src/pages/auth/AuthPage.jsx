import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { RouteConfig } from '../../config/routeConfig';
import { registerFlow } from './flows';
import LayoutAuth from '../../components/layout/auth/LayoutAuth';
import { SidebarCmp } from '../../components/layout/auth/Sidebar';
import AuthStep from './AuthStep';

export const AuthPage = () => (
  <LayoutAuth renderLeft={<SidebarCmp activeStep={0} />}>
    <Switch>
      <Route exact path={RouteConfig.createAccount}>
        <AuthStep {...registerFlow.createAccount} />
      </Route>
      <Route exact path={RouteConfig.verifyEmail}>
        <AuthStep {...registerFlow.verifyEmail} />
      </Route>
      <Route exact path={RouteConfig.verifyMobile}>
        <AuthStep {...registerFlow.verifyMobile} />
      </Route>
    </Switch>
  </LayoutAuth>
);
