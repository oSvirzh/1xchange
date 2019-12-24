import { CreateForm, Success, VerifyEmail, VerifyMobile } from './steps';
import { RouteConfig } from '../../config/routeConfig';

const registerFlow = {
  createAccount: {
    steps: [
      {
        name: 'createForm',
        component: CreateForm,
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
  },
  verifyEmail: {
    steps: [
      {
        name: 'verifyEmail',
        component: VerifyEmail,
      },
      {
        name: 'successEmailVerified',
        message: 'Your email verified successfully!',
        to: RouteConfig.verifyMobile,
        component: Success,
      },
    ],
  },
  verifyMobile: {
    steps: [
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
    ],
  },
};

export { registerFlow };
