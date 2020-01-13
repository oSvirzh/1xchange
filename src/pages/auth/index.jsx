import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { RouteConfig } from '../../config/routeConfig';
import { Register } from './Register';
import { Login } from './Login';
import { ResetPassword } from './components/ResetPassword';
import {
  NotificationContainer,
  NotificationManager,
} from 'react-notifications';
import { connect } from 'react-redux';

const AuthSectionLayout = ({ error }) => {
  useEffect(() => {
    if (error.message) NotificationManager.error(error.message, 'ERROR', 5000);
  }, [error]);

  return (
    <>
      <Switch>
        <Route path={RouteConfig.register} component={Register} />
        <Route path={RouteConfig.login} component={Login} />
        <Route path={RouteConfig.forgotPassword} component={ResetPassword} />
        <Redirect to={RouteConfig.login} />
      </Switch>
      <NotificationContainer />
    </>
  );
};

export const AuthSection = connect(({ auth }) => ({
  error: auth.error,
}))(AuthSectionLayout);
