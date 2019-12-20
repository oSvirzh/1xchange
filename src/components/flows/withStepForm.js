import React, { useCallback, useContext, memo } from 'react';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import isPlainObject from 'lodash/isPlainObject';
import isFunction from 'lodash/isFunction';
import { Formik } from 'formik';

import { StepNavContext } from './StepNavFlow';
import { STEP_STATES } from '../../utils/useStepStates';
import { getDisplayName } from '../../utils/getDisplayName';

export const withStepForm = (WrappedComponent) => {
  const Wrapper = memo(({ onSubmit, formProps, ...props }) => {
    const {
      currentStep,
      goToStep,
      onNextStep,
      stepStates,
      flowValues,
      updateFlowValues,
    } = useContext(StepNavContext);

    const isEdit = stepStates[currentStep.name] === STEP_STATES.EDIT;
    const handleSubmit = useCallback(
      (values, { setSubmitting }) => {
        setSubmitting(true);

        const nextFlowValues = { ...flowValues, ...values };
        updateFlowValues(nextFlowValues);

        return Promise.resolve(
          onSubmit ? onSubmit(nextFlowValues, props) : nextFlowValues
        ).then((data) => {
          setSubmitting(false);

          if (isEdit) {
            // on Update we are looking the `confirm` screen to navigate to it.
            if (Object.keys(stepStates).includes('confirm')) {
              goToStep('confirm');
            } else {
              onNextStep();
            }
          } else {
            if (typeof beforeNext === 'function') {
              // if resolved data contains `nextStep` attribute we will navigate to that step.
              if (isPlainObject(data) && 'nextStep' in data) {
                goToStep(data.nextStep);
              } else {
                // otherwise we will open next step.
                onNextStep(data);
              }
            } else {
              onNextStep();
            }
          }
        });
      },
      [
        onSubmit,
        flowValues,
        updateFlowValues,
        goToStep,
        onNextStep,
        isEdit,
        stepStates,
        props,
      ]
    );

    const maybeInitialValues = get(formProps, 'initialValues', '');
    const initialValues = isFunction(maybeInitialValues)
      ? maybeInitialValues(flowValues, props)
      : maybeInitialValues;

    return (
      <Formik
        {...formProps}
        initialValues={initialValues}
        onSubmit={handleSubmit}
        enableReinitialize
      >
        {({ handleReset, handleSubmit, ...formikProps }) => (
          <form onReset={handleReset} onSubmit={handleSubmit}>
            <WrappedComponent
              {...formikProps}
              {...props}
              handleSubmit={handleSubmit}
            />
          </form>
        )}
      </Formik>
    );
  });

  Wrapper.propTypes = {
    onSubmit: PropTypes.func,
    formProps: PropTypes.object.isRequired,
  };

  Wrapper.displayName = `withStepForm(${getDisplayName(WrappedComponent)})`;

  return Wrapper;
};
