import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteConfig } from '../../../config/routeConfig';
import { actions } from '../../../store/auth/actions';
import { AuthCode } from './AuthCode';

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
    confirmEmail: actions.confirmEmail,
    confirmEmailSubmit: actions.confirmEmailSubmit,
  }
)(VerifyEmailLayout);
