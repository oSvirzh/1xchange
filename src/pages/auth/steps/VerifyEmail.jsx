import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { NextButton } from '../../../components/flows/NextButton';
import spinIcon from '../../../assets/images/spin.svg';
import { NumerableItem } from '../../../components/elements/list/NumerableList';
import { ButtonGroup } from '../../../components/elements/buttons/Button';
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
        <NumerableItem
          text="Make sure you provided the correct email address."
          number="1"
        />
        <NumerableItem text="Check your email spam/junk folder." number="2" />
      </StepsWrapper>
      <NextButton text="Continue" />
      <ButtonGroup>
        <img src="" alt="" />
        <ButtonBack onClick={() => goBack()}>Go Back</ButtonBack>
      </ButtonGroup>
    </>
  );
};
