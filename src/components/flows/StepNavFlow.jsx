import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useStepNav } from '../../utils/useStepNav';
import { stepsList } from '../../utils/prop-types';

const StepNavContext = createContext({});

const StepNavFlow = ({ steps, children }) => {
  const { currentStep, onNextStep } = useStepNav(steps);

  // Memoize context value.
  const contextValue = useMemo(
    () => ({
      currentStep,
      // Next button handler
      onNextStep,
      steps,
    }),
    [currentStep, onNextStep, steps]
  );

  return (
    <StepNavContext.Provider value={contextValue}>
      {children}
    </StepNavContext.Provider>
  );
};

StepNavFlow.propTypes = {
  steps: stepsList.isRequired,
  children: PropTypes.node.isRequired,
};

export { StepNavContext, StepNavFlow };
