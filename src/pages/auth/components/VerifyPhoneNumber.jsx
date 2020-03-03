import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteConfig } from '../../../config/routeConfig';
import { authActions } from '../../../store/rootActions';
import { AuthCode } from './AuthCode';

const VerifyPhoneNumberLayout = ({
  phoneNumberConfirmed,
  login,
  authData,
  resendSMS,
  confirmPhoneNumber,
}) => {
  useEffect(() => {
    if (phoneNumberConfirmed)
      login({
        email: authData.email,
        password: authData.password,
        nonLogin: true,
      });
  }, [phoneNumberConfirmed]);

  return (
    <AuthCode
      title="Enter verification code from SMS"
      successMessage="Your number has been verified successfully!"
      to={RouteConfig.verifyEmail}
      resend={resendSMS}
      confirm={confirmPhoneNumber}
      success={phoneNumberConfirmed}
    />
  );
};

export const VerifyPhoneNumber = connect(
  (state) => ({
    phoneNumberConfirmed: state.auth.phoneNumberConfirmed,
    authData: state.auth.register,
  }),
  {
    login: authActions.login,
    resendSMS: authActions.resendSMS,
    confirmPhoneNumber: authActions.confirmPhoneNumber,
  }
)(VerifyPhoneNumberLayout);
