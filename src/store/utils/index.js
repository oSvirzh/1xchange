import { createAction } from 'redux-act';

export const createAsyncActionTypes = (serviceName) => ({
  REQUEST: createAction(`${serviceName} REQUEST`),
  SUCCESS: createAction(`${serviceName} SUCCESS`),
  FAILURE: createAction(`${serviceName} FAILURE`),
});
