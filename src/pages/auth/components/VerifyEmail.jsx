import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteConfig } from '../../../config/routeConfig';
import { AuthCode } from './AuthCode';
import { authActions } from "../../../store/rootActions";

const VerifyEmailLayout = ({ confirmEmail, confirmEmailSubmit, emailConfirmed }) => {
  useEffect(() => {
    confirmEmail();
  }, []);

  return (
    <AuthCode
      title="Enter verification code from Email"
      successMessage="Your number verified successfully!"
      to={RouteConfig.updateProfile}
      confirm={confirmEmailSubmit}
      success={emailConfirmed}
    />
  );
};

export const VerifyEmail = connect(
  ({auth}) => ({emailConfirmed: auth.emailConfirmed}),
  {
    confirmEmail: authActions.confirmEmail,
    confirmEmailSubmit: authActions.confirmEmailSubmit,
  }
)(VerifyEmailLayout);
