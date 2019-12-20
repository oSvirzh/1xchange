import React from 'react';
import { withStepForm } from '../../../components/flows/withStepForm';
import { formikProps } from '../../../utils/prop-types';
import { NextButton } from '../../../components/flows/NextButton';

const SuccessLayout = ({ message }) => {
  return (
    <>
      <h1>{message}</h1>
      <NextButton text="Continue" />
    </>
  );
};

SuccessLayout.propTypes = {
  ...formikProps,
};

export const Success = withStepForm(SuccessLayout);
