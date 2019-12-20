import React from 'react';
import { withStepForm } from '../../../components/flows/withStepForm';
import { formikProps } from '../../../utils/prop-types';
import { NextButton } from '../../../components/flows/NextButton';

const VerifyEmailLayout = () => {
  return (
    <>
      <h1>Verify email</h1>
      <NextButton text="Continue" />
    </>
  );
};

VerifyEmailLayout.propTypes = {
  ...formikProps,
};

export const VerifyEmail = withStepForm(VerifyEmailLayout);
