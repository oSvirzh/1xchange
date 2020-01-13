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
import { Success } from './Success';
import { RouteConfig } from '../../../config/routeConfig';
import { actions } from '../../../store/auth/actions';
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

  return (
    <LayoutAuth renderLeft={<LoginSidebar />}>
      {reseted ? (
        <VerifyWrapper>
          <h1 className="title">
            The link for password recovery was successfully sent to your email
            address
          </h1>
          <p>
            The link for password recovery was successfully sent to your email
            address. Please,check your email box.
          </p>
          <Button to={RouteConfig.root}>Back to Home page</Button>
        </VerifyWrapper>
      ) : (
        <FormWrapper>
          <VerifyWrapper>
            <h1 className="title">Reset password</h1>
            <ResetPasswordForm />
            <ButtonGroup>
              <ButtonBack onClick={history.goBack}>Go Back</ButtonBack>
            </ButtonGroup>
          </VerifyWrapper>
        </FormWrapper>
      )}
    </LayoutAuth>
  );
};

export const ResetPassword = connect((state) => ({
  reseted: state.auth.passwordReset,
}))(ResetPasswordLayout);
