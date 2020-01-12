import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import { RouteConfig } from "../config/routeConfig";
import { Dashboard } from "./dashboard/Dashboard";

export const Main = () => (
  <Switch>
    <Route path={RouteConfig.dashboard} component={Dashboard} />
    <Redirect to={RouteConfig.dashboard} />
  </Switch>
);
