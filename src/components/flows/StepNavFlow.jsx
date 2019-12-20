import React, { createContext, useState, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useStepNav } from '../../utils/useStepNav';
import { useStepStates } from '../../utils/useStepStates';
import { stepsList } from '../../utils/prop-types';

const StepNavContext = createContext({});

const StepNavFlow = ({ steps, children }) => {
  const { currentStep, onNextStep, goToStep, resetStepNav } = useStepNav(steps);
  const { completeStep, stepStates, resetStepStates } = useStepStates(
    steps,
    currentStep.name
  );
  const [flowValues, updateFlowValues] = useState({});

  const handleNextStep = useCallback(() => {
    completeStep(currentStep.name);
    onNextStep();
  }, [completeStep, onNextStep, currentStep]);

  const resetFlow = useCallback(() => {
    resetStepNav();
    resetStepStates();
    updateFlowValues({});
  }, [resetStepNav, resetStepStates, updateFlowValues]);

  // Memoize context value.
  const contextValue = useMemo(
    () => ({
      currentStep,
      // Next button handler
      onNextStep: handleNextStep,
      // Method to change the step by name
      goToStep,
      flowValues,
      updateFlowValues,
      stepStates,
      steps,
      resetFlow,
    }),
    [
      currentStep,
      flowValues,
      updateFlowValues,
      handleNextStep,
      goToStep,
      stepStates,
      steps,
      resetFlow,
    ]
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
