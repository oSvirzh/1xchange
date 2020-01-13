import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { RouteConfig } from '../../config/routeConfig';
import LayoutAuth from '../../components/layout/auth/LayoutAuth';
import { Sidebar } from '../../components/layout/auth/Sidebar';
import { CreateAccount, VerifyEmail, VerifyPhoneNumber } from './components';
import { UpdateProfile } from './components/UpdateProfile';
import { connect } from 'react-redux';

export const RegisterLayout = ({ isRegister }) => (
  <LayoutAuth renderLeft={<Sidebar />}>
    {!isRegister && <Redirect to={RouteConfig.register} />}
    <Switch>
      <Route exact path={RouteConfig.register} component={CreateAccount} />
      <Route exact path={RouteConfig.verifyEmail} component={VerifyEmail} />
      <Route
        exact
        path={RouteConfig.verifyMobile}
        component={VerifyPhoneNumber}
      />
      <Route exact path={RouteConfig.updateProfile} component={UpdateProfile} />
    </Switch>
  </LayoutAuth>
);

export const Register = connect(({ auth }) => ({
  isRegister: auth.isRegister,
}))(RegisterLayout);
