import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../../components/elements/buttons/Button';

export const Success = ({ message, to }) => {
  return (
    <>
      <h1>{message}</h1>
      <Button to={to}>Continue</Button>
    </>
  );
};

Success.propTypes = {
  message: PropTypes.string,
  to: PropTypes.string,
};
