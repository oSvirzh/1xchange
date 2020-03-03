import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { ButtonGroup } from '../../../components/elements/buttons/Button';
import { ButtonBack } from '../../../components/elements/buttons/ButtonBack';
import { AuthForm } from '../forms/AuthForm';
import { Success } from './Success';

const VerifyWrapper = styled.div`
  h1 {
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;

const AuthCodeLayout = ({
  success,
  to,
  successMessage,
  title,
  resend,
  confirm,
}) => {
  const history = useHistory();

  if (success) {
    return <Success message={successMessage} to={to} />;
  }

  return (
    <>
      <VerifyWrapper>
        <h1 className="title">{title}</h1>
        <AuthForm resend={resend} confirm={confirm} />
        {/*<ButtonGroup>*/}
        {/*  <ButtonBack onClick={history.goBack}>Go Back</ButtonBack>*/}
        {/*</ButtonGroup>*/}
      </VerifyWrapper>
    </>
  );
};

export const AuthCode = connect((state) => ({
  authData: state.auth.register,
}))(AuthCodeLayout);
