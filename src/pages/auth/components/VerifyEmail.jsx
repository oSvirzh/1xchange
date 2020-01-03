import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import spinIcon from '../../../assets/images/spin.svg';
import { NumerableList } from '../../../components/elements/list/NumerableList';
import {
  Button,
  ButtonGroup,
} from '../../../components/elements/buttons/Button';
import { ButtonBack } from '../../../components/elements/buttons/ButtonBack';

const VerifyWrapper = styled.div`
  margin-top: 50px;
  max-width: 459px;
`;

const StepsWrapper = styled.div`
  margin-top: 60px;
`;

export const VerifyEmail = () => {
  const { goBack } = useHistory();

  return (
    <>
      <img src={spinIcon} alt="loading" />
      <VerifyWrapper>
        <h1 className="title">Verify your email address</h1>
        <h2 className="subtitle">
          A verification email has been sent to test@test.com.
        </h2>
        <p className="paragraph">
          Please open the email and click on the &quot;Verify&quot; button to
          confirm that the email address belongs to you.
        </p>
      </VerifyWrapper>
      <StepsWrapper>
        <h2 className="subtitle">
          Did not receive the email within 5 minutes?
        </h2>
        <NumerableList />
      </StepsWrapper>
      <Button text="Continue" />
      <ButtonGroup>
        <img src="" alt="" />
        <ButtonBack onClick={() => goBack()}>Go Back</ButtonBack>
      </ButtonGroup>
    </>
  );
};
