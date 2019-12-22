import React from 'react';
import { Button } from '../../components/elements/buttons/Button';
import okIcon from '../../../src/assets/images/OK.svg';
import styled from 'styled-components';

const VerifyWrapper = styled.div`
  text-align: center;

  h1 {
    margin-top: 50px;
  }

  button {
    margin-top: 30px;
  }
`;

const VerifiedEmail = () => {
  return (
    <>
      <VerifyWrapper>
        <img src={okIcon} width="90px" alt="checked" />
        <h1 className="title">Your email verified successfully!</h1>
        <Button>Continue</Button>
      </VerifyWrapper>
    </>
  );
};

export default VerifiedEmail;
