import { useState, useCallback, useMemo, useEffect } from 'react';

const STEP_STATES = {
  COMPLETED: 'completed',
  INCOMPLETED: 'incompleted',
  ACTIVE: 'active',
  EDIT: 'edit',
};

const useStepStates = (steps, currentStepName) => {
  // Handle step states.
  const [completedSteps, updateCompletedSteps] = useState([]);
  const completeStep = useCallback(
    (stepName) => {
      if (!completedSteps.includes(stepName)) {
        updateCompletedSteps(completedSteps.concat(stepName));
      }
    },
    [completedSteps]
  );

  const stepStates = useMemo(() => {
    return steps.reduce(
      (states, { name }) => ({
        ...states,
        [name]:
          (name === currentStepName &&
            !completedSteps.includes(name) &&
            STEP_STATES.ACTIVE) ||
          (name === currentStepName &&
            completedSteps.includes(name) &&
            STEP_STATES.EDIT) ||
          (completedSteps.includes(name) && STEP_STATES.COMPLETED) ||
          STEP_STATES.INCOMPLETED,
      }),
      {}
    );
  }, [steps, currentStepName, completedSteps]);

  const resetStepStates = useCallback(() => updateCompletedSteps([]), [
    updateCompletedSteps,
  ]);

  // reset context on steps updates
  useEffect(() => {
    resetStepStates();
  }, [steps]);

  return { completeStep, stepStates, resetStepStates };
};

export { STEP_STATES, useStepStates };
