import { createReducer } from 'redux-act';

import { register } from './actions';

const initial = {
  auth: {},
};

const authReducer = createReducer(
  {
    [register.FAILURE]: (state, payload) => {
      return Object.assign({}, state, {
        registerError: payload,
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
