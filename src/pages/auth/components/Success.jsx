import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../components/elements/buttons/Button';
import styled from 'styled-components';
import okIcon from '../../../assets/images/OK.svg';

const VerifyWrapper = styled.div`
  text-align: center;

  h1 {
    margin-top: 50px;
  }

  button {
    margin-top: 30px;
  }
`;

export const Success = ({ message, to }) => {
  return (
    <>
      <VerifyWrapper>
        <img src={okIcon} width="90px" alt="checked" />
        <h1 className="title">{message}</h1>
        <Button to={to}>Continue</Button>
      </VerifyWrapper>
    </>
  );
};

Success.propTypes = {
  message: PropTypes.string,
  to: PropTypes.string,
};
