import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { RouteConfig } from '../../config/routeConfig';
import { createAccountFlow } from './flows';
import LayoutAuth from '../../components/layout/auth/LayoutAuth';
import { SidebarCmp } from '../../components/layout/auth/Sidebar';
import AuthStep from './AuthStep';
import { SidebarAuth } from '../../components/layout/auth/LoginSidebar';
import Login from './Login';
import VerifiedEmail from './VerifiedEmail';
import AuthCode from './AuthCode';

export const AuthPage = () => (
  <LayoutAuth renderLeft={<SidebarAuth activeStep={0} />}>
    {/*<Switch>*/}
    {/*  <Route exact path={RouteConfig.register}>*/}
    {/*    <AuthStep {...createAccountFlow} />*/}
    {/*  </Route>*/}
    {/*  <Route exact path={RouteConfig.login}>*/}
    {/*    <AuthStep {...createAccountFlow} />*/}
    {/*  </Route>*/}
    {/*</Switch>*/}

    <Login />
    {/*<VerifiedEmail />*/}
    {/*<AuthCode />*/}
  </LayoutAuth>
);
