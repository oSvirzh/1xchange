import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import LayoutAuth from '../../../components/layout/auth/LayoutAuth';
import { LoginSidebar } from '../../../components/layout/auth/LoginSidebar';
import FormWrapper from '../сomponents/FormWrapper';
import { colors } from '../../../styles/const';
import { EnterNewPasswordForm } from '../forms/EnterNewPasswordForm';
import { Success } from './Success';
import { RouteConfig } from '../../../config/routeConfig';

const VerifyWrapper = styled.div`
  color: ${colors.white};

  h1 {
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;

const EnterNewPasswordLayout = ({ passwordResetSubmit }) => {
  if (passwordResetSubmit)
    return (
      <Success
        message="Your password was changed successfully"
        to={RouteConfig.login}
      />
    );

  return (
    <LayoutAuth renderLeft={<LoginSidebar />}>
      {passwordResetSubmit ? (
        <Success
          message="Your password was changed successfully"
          to={RouteConfig.login}
        />
      ) : (
        <FormWrapper>
          <VerifyWrapper>
            <h1 className="title">Set new password</h1>
            <EnterNewPasswordForm />
          </VerifyWrapper>
        </FormWrapper>
      )}
    </LayoutAuth>
  );
};

export const EnterNewPassword = connect(({ auth }) => ({
  passwordResetSubmit: auth.passwordResetSubmit,
}))(EnterNewPasswordLayout);
