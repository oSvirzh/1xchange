import { createReducer } from 'redux-act';

import { register } from './actions';

const initial = {
  auth: {
    errors: [],
  },
};

const errorCodes = {
  UsernameExistsException: 'email',
  InvalidPasswordException: 'password',
};

const authReducer = createReducer(
  {
    [register.FAILURE]: (state, { code, message }) => {
      return Object.assign({}, state, {
        errors: {
          [errorCodes[code]]: message,
        },
      });
    },
    [register.SUCCESS]: (state, payload) => {
      return Object.assign({}, state, {
        register: payload,
      });
    },
  },
  initial.auth
);

export default authReducer;
