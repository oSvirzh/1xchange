import { useState, useCallback, useEffect, useMemo } from 'react';

export const useStepNav = (steps) => {
  // Extract names of steps and memoize them.
  const stepNames = useMemo(() => steps.map(({ name }) => name), [steps]);
  if (!stepNames.length) {
    throw new Error('No steps are provided');
  }

  // Handle steps navigation.
  const [currentStepName, setStep] = useState(stepNames[0]);
  const currentStep = steps[stepNames.indexOf(currentStepName)];
  const onNextStep = useCallback(() => {
    const currentStepIndex = stepNames.indexOf(currentStepName);
    if (currentStepIndex + 1 < stepNames.length) {
      setStep(stepNames[currentStepIndex + 1]);
    }
  }, [currentStepName, stepNames]);
  const goToStep = useCallback(
    (stepName) => {
      if (stepNames.includes(stepName)) {
        setStep(stepName);
      }
    },
    [stepNames]
  );

  const resetStepNav = useCallback(() => setStep(stepNames[0]), [
    setStep,
    stepNames,
  ]);

  // reset context on steps updates
  useEffect(() => {
    resetStepNav();
  }, [steps]);

  return { currentStep, onNextStep, goToStep, resetStepNav };
};
