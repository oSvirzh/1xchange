import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { RouteConfig } from '../config/routeConfig';
import { Dashboard } from './dashboard/Dashboard';
import { Register } from './auth/Register';
import { Login } from './auth/Login';
import { ResetPassword } from './auth/components/ResetPassword';
import { EnterNewPassword } from './auth/components/EnterNewPassword';
import AboutLayout from '../components/layout/landing/AboutLayout';
import LandingLayout from '../components/layout/landing/LandingLayout';
import Settings from './settings';
import styled from 'styled-components';

export const Main = () => (
  <Styled.Container>
    <Switch>
      <Route path={RouteConfig.dashboard} component={Dashboard} />
      <Route path={RouteConfig.register} component={Register} />
      <Route path={RouteConfig.login} component={Login} />
      <Route path={RouteConfig.forgotPassword} component={ResetPassword} />
      <Route
        path={RouteConfig.forgotPasswordConfirm}
        component={EnterNewPassword}
      />
      <Route path={RouteConfig.about} component={AboutLayout} />
      <Route path={RouteConfig.settings} component={Settings} />
      <Route path={RouteConfig.root} component={LandingLayout} />
      <Redirect to={RouteConfig.dashboard} />
    </Switch>
  </Styled.Container>
);

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(
      325.95deg,
      #101728 -143.03%,
      #11192b -3.81%,
      #15213d 58.69%,
      #0c1834 131.65%
    );
    background-size: contain;
  `,
};
