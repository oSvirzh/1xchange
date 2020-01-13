import { createReducer } from 'redux-act';

import { ActionTypes } from './actions';

const initial = {
  auth: {
    error: {},
    register: { user: {} },
    isSuccess: false,
    phoneNumberConfirmed: false,
    emailConfirmed: false,
    isLoading: false,
    isAuthenticated: false,
    passwordReset: false,
    isRegister: false,
    isDataUpdated: false,
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
          type: errorCodes[code] || 'global',
          message,
        },
      });
    },
    [ActionTypes.register.SUCCESS]: (state, payload) => {
      return Object.assign({}, state, {
        register: payload,
        isRegister: true,
        isLoading: false,
      });
    },
    [ActionTypes.singIn.FAILURE]: (state, { code, message }) => {
      return Object.assign({}, state, {
        error: {
          errorType: errorCodes[code] || 'global',
          message,
        },
        isAuthenticated: false,
        loading: false,
      });
    },
    [ActionTypes.singIn.SUCCESS]: (state, payload) => {
      return Object.assign({}, state, {
        user: { ...payload.attributes, country: JSON.parse(payload.attributes['custom:country']) },
        isAuthenticated: payload.nonLogin ? false : true,
        loading: false,
      });
    },
    [ActionTypes.getCurrentSession.FAILURE]: (state, payload) => {
      return Object.assign({}, state, {
        user: {},
        isAuthenticated: false,
        isLoading: true,
      });
    },
    [ActionTypes.getCurrentSession.SUCCESS]: (state, payload) => {
      return Object.assign({}, state, {
        user: { ...payload.idToken.payload,  country: JSON.parse(payload.idToken.payload['custom:country']) },
        isAuthenticated: true,
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
    [ActionTypes.confirmPhoneNumber.FAILURE]: (state, { code, message }) => {
      return Object.assign({}, state, {
        error: {
          errorType: errorCodes[code] || 'global',
          message,
        },
        loading: false,
      });
    },
    [ActionTypes.confirmEmail.SUCCESS]: (state, payload) => {
      return Object.assign({}, state, {
        isLoading: false,
      });
    },
    [ActionTypes.confirmEmail.FAILURE]: (state, { code, message }) => {
      return Object.assign({}, state, {
        error: {
          errorType: errorCodes[code] || 'global',
          message,
        },
        loading: false,
      });
    },
    [ActionTypes.confirmEmailSubmit.SUCCESS]: (state, payload) => {
      return Object.assign({}, state, {
        emailConfirmed: true,
        isLoading: false,
      });
    },
    [ActionTypes.confirmEmailSubmit.FAILURE]: (state, { code, message }) => {
      return Object.assign({}, state, {
        error: {
          errorType: errorCodes[code] || 'global',
          message,
        },
        loading: false,
      });
    },
    [ActionTypes.confirmEmail.SUCCESS]: (state, payload) => {
      return Object.assign({}, state, {
        phoneNumber: payload,
        emailConfirmed: false,
        isLoading: false,
      });
    },
    [ActionTypes.signOut.SUCCESS]: (state, payload) => {
      return Object.assign({}, state, {
        isAuthenticated: false,
      });
    },
    [ActionTypes.resetPassword.SUCCESS]: (state, payload) => {
      return Object.assign({}, state, {
        passwordReset: true,
      });
    },
    [ActionTypes.updateUserAttributes.FAILURE]: (state, { code, message }) => {
      return Object.assign({}, state, {
        error: {
          errorType: errorCodes[code] || 'global',
          message,
        },
        isAuthenticated: false,
        loading: false,
      });
    },
    [ActionTypes.updateUserAttributes.SUCCESS]: (state, payload) => {
      return Object.assign({}, state, {
        isDataUpdated: true,
        loading: false,
      });
    },
  },
  initial.auth
);

export default authReducer;
