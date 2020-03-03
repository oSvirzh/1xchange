import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { RouteConfig } from '../config/routeConfig';
import { Dashboard } from './dashboard/Dashboard';
import Settings from './settings';
import styled from 'styled-components';

export const Main = () => (
  <Styled.Container>
    <Switch>
      <Route path={RouteConfig.dashboard} component={Dashboard} />
      <Route path={RouteConfig.settings} component={Settings} />
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
