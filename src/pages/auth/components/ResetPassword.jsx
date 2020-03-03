import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import {
  Button,
  ButtonGroup,
} from '../../../components/elements/buttons/Button';
import { ButtonBack } from '../../../components/elements/buttons/ButtonBack';
import { ResetPasswordForm } from '../forms/ResetPasswordForm';
import { RouteConfig } from '../../../config/routeConfig';
import LayoutAuth from '../../../components/layout/auth/LayoutAuth';
import { LoginSidebar } from '../../../components/layout/auth/LoginSidebar';
import FormWrapper from '../сomponents/FormWrapper';
import { colors } from '../../../styles/const';

const VerifyWrapper = styled.div`
  color: ${colors.white};

  h1 {
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;

const ResetPasswordLayout = ({ reseted }) => {
  const history = useHistory();

  useEffect(() => {
    if (reseted) history.push(RouteConfig.forgotPasswordConfirm);
  }, [reseted]);

  return (
    <LayoutAuth renderLeft={<LoginSidebar />}>
      <FormWrapper>
        <VerifyWrapper>
          <h1 className="title">Reset password</h1>
          <ResetPasswordForm />
          <ButtonGroup>
            <ButtonBack onClick={history.goBack}>Go Back</ButtonBack>
          </ButtonGroup>
        </VerifyWrapper>
      </FormWrapper>
    </LayoutAuth>
  );
};

export const ResetPassword = connect((state) => ({
  reseted: state.auth.passwordReset,
}))(ResetPasswordLayout);
