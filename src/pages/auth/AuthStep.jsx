import React, { useContext } from 'react';
import {
  StepNavFlow,
  StepNavContext,
} from '../../components/flows/StepNavFlow';
import { stepsList } from '../../utils/prop-types';

const StepLayout = (props) => {
  const {
    currentStep: { name, component: StepComponent, ...stepProps },
  } = useContext(StepNavContext);
  return <StepComponent {...stepProps} {...props} />;
};

const AuthStep = ({ steps }) => {
  return (
    <StepNavFlow steps={steps}>
      <StepLayout />
    </StepNavFlow>
  );
};

AuthStep.propTypes = {
  steps: stepsList.isRequired,
};

export default AuthStep;
