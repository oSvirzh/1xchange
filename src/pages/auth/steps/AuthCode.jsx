import React from 'react';
import {
  Button,
  ButtonGroup,
} from '../../../components/elements/buttons/Button';
import styled from 'styled-components';
import CodeInput from '../../../components/form/CodeInput';
import { ButtonBack } from '../../../components/elements/buttons/ButtonBack';

const VerifyWrapper = styled.div`
  h1 {
    margin-top: 50px;
    margin-bottom: 20px;
  }
`;

export const AuthCode = () => {
  return (
    <>
      <VerifyWrapper>
        <h1 className="title">Enter verification code</h1>
        <CodeInput label="Authentication code" placeholder="0000000" />
        <ButtonGroup>
          <Button>Continue</Button>
        </ButtonGroup>
        <ButtonGroup>
          <ButtonBack>Go Back</ButtonBack>
        </ButtonGroup>
      </VerifyWrapper>
    </>
  );
};
