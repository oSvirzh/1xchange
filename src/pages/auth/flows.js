import { CreateForm, Success, VerifyEmail, VerifyMobile } from './steps';

const createAccountFlow = {
  steps: [
    {
      name: 'createForm',
      component: CreateForm,
    },
    {
      name: 'verifyEmail',
      component: VerifyEmail,
    },
    {
      name: 'successEmailVerified',
      message: 'Your email verified successfully!',
      component: Success,
    },
    {
      name: 'verifyMobile',
      component: VerifyMobile,
    },
    {
      name: 'successMobileVerified',
      formProps: {
        initialValues: { birthDate: '' },
      },
      message: 'Your number verified successfully!',
      component: Success,
    },
    // {
    //   name: 'basicProfileInformation',
    // },
    // {
    //   name: 'selectIdType',
    // },
    // {
    //   name: 'uploadMethod',
    // },
  ],
};

export { createAccountFlow };
