import React, { useContext } from 'react';
import { Button } from '../elements/buttons/Button';
import { StepNavContext } from './StepNavFlow';
import PropTypes from 'prop-types';

const NextButton = ({ text }) => {
  const { onNextStep } = useContext(StepNavContext);
  return <Button onClick={onNextStep}>{text}</Button>;
};

NextButton.propTypes = {
  text: PropTypes.any,
};

export { NextButton };
