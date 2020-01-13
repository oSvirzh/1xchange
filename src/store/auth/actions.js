import { createAsyncActionTypes } from '../utils';

export const ActionTypes = {
  register: createAsyncActionTypes('REGISTER'),
  singIn: createAsyncActionTypes('SIGN_IN'),
  confirmPhoneNumber: createAsyncActionTypes('CONFIRM_PHONE_NUMBER'),
  resendSMS: createAsyncActionTypes('RESEND_SMS'),
  confirmEmail: createAsyncActionTypes('CONFIRM_EMAIL'),
  confirmEmailSubmit: createAsyncActionTypes('CONFIRM_EMAIL_SUBMIT'),
  getCurrentSession: createAsyncActionTypes('GET_CURRENT_SESSION'),
  updateUserAttributes: createAsyncActionTypes('UPDATE_USER_ATTRIBUTES'),
  signOut: createAsyncActionTypes('SIGN_OUT'),
  resetPassword: createAsyncActionTypes('RESET_PASSWORD'),
};

export const actions = {
  register: ActionTypes.register.REQUEST,
  confirmPhoneNumber: ActionTypes.confirmPhoneNumber.REQUEST,
  resendSMS: ActionTypes.resendSMS.REQUEST,
  confirmEmail: ActionTypes.confirmEmail.REQUEST,
  confirmEmailSubmit: ActionTypes.confirmEmailSubmit.REQUEST,
  login: ActionTypes.singIn.REQUEST,
  getCurrentSession: ActionTypes.getCurrentSession.REQUEST,
  updateUserAttributes: ActionTypes.updateUserAttributes.REQUEST,
  signOut: ActionTypes.signOut.REQUEST,
  resetPassword: ActionTypes.resetPassword.REQUEST,
};
