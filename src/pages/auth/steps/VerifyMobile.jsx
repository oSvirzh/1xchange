import React from 'react';
import { withStepForm } from '../../../components/flows/withStepForm';
import { formikProps } from '../../../utils/prop-types';
import { NextButton } from '../../../components/flows/NextButton';

const VerifyMobileLayout = () => {
  return (
    <>
      <h1>Verify mobile</h1>
      <NextButton text="Continue" />
    </>
  );
};

VerifyMobileLayout.propTypes = {
  ...formikProps,
};

export const VerifyMobile = withStepForm(VerifyMobileLayout);
