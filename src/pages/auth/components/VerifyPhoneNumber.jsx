import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { RouteConfig } from '../../../config/routeConfig';
import { actions } from '../../../store/auth/actions';
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
      successMessage="Your number verified successfully!"
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
    login: actions.login,
    resendSMS: actions.resendSMS,
    confirmPhoneNumber: actions.confirmPhoneNumber,
  }
)(VerifyPhoneNumberLayout);
