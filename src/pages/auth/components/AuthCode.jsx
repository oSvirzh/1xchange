import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { ButtonGroup } from '../../../components/elements/buttons/Button';
import { ButtonBack } from '../../../components/elements/buttons/ButtonBack';
import { AuthForm } from '../forms/AuthForm';
import { Success } from './Success';
import { RouteConfig } from '../../../config/routeConfig';
import { actions } from '../../../store/auth/actions';

const VerifyWrapper = styled.div`
  h1 {
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;

const AuthCodeLayout = ({ phoneNumberConfirmed, login, authData }) => {
  const history = useHistory();

  useEffect(() => {
    if (phoneNumberConfirmed)
      login({
        email: authData.email,
        password: authData.password,
        nonLogin: true,
      });
  }, [phoneNumberConfirmed]);

  if (phoneNumberConfirmed) {
    return (
      <Success
        message="Your number verified successfully!"
        to={RouteConfig.verifyEmail}
      />
    );
  }

  return (
    <>
      <VerifyWrapper>
        <h1 className="title">Enter verification code</h1>
        <AuthForm />
        <ButtonGroup>
          <ButtonBack onClick={history.goBack}>Go Back</ButtonBack>
        </ButtonGroup>
      </VerifyWrapper>
    </>
  );
};

export const AuthCode = connect(
  (state) => ({
    phoneNumberConfirmed: state.auth.phoneNumberConfirmed,
    authData: state.auth.register,
  }),
  { login: actions.login }
)(AuthCodeLayout);
