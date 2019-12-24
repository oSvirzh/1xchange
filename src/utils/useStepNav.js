import { useState, useCallback, useMemo } from 'react';

export function useStepNav(steps) {
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

  const resetStepNav = useCallback(() => setStep(stepNames[0]), [
    setStep,
    stepNames,
  ]);

  if (!currentStep) {
    resetStepNav();
  }

  return { currentStep, onNextStep, resetStepNav };
}
