import React from 'react';
import { SmallStep } from '../../components/elements/smallStep/index.jsx';
import { ButtonGroup } from '../../components/elements/buttons/Button';
import { ButtonBack } from '../../components/elements/buttons/ButtonBack';
import spinIcon from '../../../src/assets/images/spin.svg';
import styled from 'styled-components';

const VerifyWrapper = styled.div`
  margin-top: 50px;
  max-width: 459px;
`;

const StepsWrapper = styled.div`
  margin-top: 60px;
`;

const VerifyEmail = () => {
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
        <SmallStep />
      </StepsWrapper>
      <ButtonGroup>
        <ButtonBack>Go Back</ButtonBack>
      </ButtonGroup>
    </>
  );
};

export default VerifyEmail;
