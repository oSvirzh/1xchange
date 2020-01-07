import { createAsyncActionTypes } from '../utils';

export const register = createAsyncActionTypes('REGISTER');

export const ActionTypes = {
  register: createAsyncActionTypes('REGISTER'),
};

export const actions = {
  register: register.REQUEST,
};
