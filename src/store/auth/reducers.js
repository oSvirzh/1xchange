import { createReducer } from 'redux-act';

import { ActionTypes } from './actions';

const initial = {
  auth: {
    error: {},
    register: { user: {} },
    isSuccess: false,
    phoneNumberConfirmed: true,
    emailConfirmed: false,
    isLoading: false,
    isAuthenticated: false,
  },
};

const errorCodes = {
  UsernameExistsException: 'email',
  InvalidPasswordException: 'password',
};

const authReducer = createReducer(
  {
    [ActionTypes.register.REQUEST]: (state, { code, message }) => {
      return Object.assign({}, state, {
        isLoading: true,
      });
    },
    [ActionTypes.register.FAILURE]: (state, { code, message }) => {
      return Object.assign({}, state, {
        error: {
          errorType: errorCodes[code] || 'global',
          message,
        },
        isSuccess: false,
        isLoading: false,
      });
    },
    [ActionTypes.register.SUCCESS]: (state, payload) => {
      return Object.assign({}, state, {
        register: payload,
        isSuccess: true,
        isLoading: false,
      });
    },
    [ActionTypes.singIn.FAILURE]: (state, { code, message }) => {
      return Object.assign({}, state, {
        error: {
          errorType: [errorCodes[code] || 'global'],
          message,
        },
        isAuthenticated: false,
        isSuccess: false,
        loading: false,
      });
    },
    [ActionTypes.singIn.SUCCESS]: (state, payload) => {
      return Object.assign({}, state, {
        user: { ...payload },
        isAuthenticated: payload.nonLogin ? false : true,
        isSuccess: true,
        loading: false,
      });
    },
    [ActionTypes.getCurrentSession.FAILURE]: (state, payload) => {
      return Object.assign({}, state, {
        user: {},
        isAuthenticated: false,
        isSuccess: false,
        isLoading: true,
      });
    },
    [ActionTypes.getCurrentSession.SUCCESS]: (state, payload) => {
      return Object.assign({}, state, {
        user: { ...payload },
        isAuthenticated: true,
        isSuccess: true,
        isLoading: false,
      });
    },
    [ActionTypes.confirmPhoneNumber.SUCCESS]: (state, payload) => {
      return Object.assign({}, state, {
        phoneNumber: payload,
        phoneNumberConfirmed: true,
        isLoading: false,
      });
    },
    [ActionTypes.confirmEmail.SUCCESS]: (state, payload) => {
      return Object.assign({}, state, {
        phoneNumber: payload,
        emailConfirmed: true,
        isLoading: false,
      });
    },
    [ActionTypes.confirmEmail.SUCCESS]: (state, payload) => {
      return Object.assign({}, state, {
        phoneNumber: payload,
        emailConfirmed: false,
        isLoading: false,
      });
    },
  },
  initial.auth
);

export default authReducer;
