import { createAsyncActionTypes } from '../utils';
import { createAction } from 'redux-act';

export const ActionTypes = {
  getHistorical: createAsyncActionTypes('GET HISTORICAL'),
  getCurrencyMap: createAsyncActionTypes('GET CURRENCY MAP'),
  setTabCurrency: createAction('SET TAB CURRENCY'),
  setCurrentTab: createAction('SET CURRENT TAB'),
  addMarket: createAction('ADD NEW MARKET'),

};

export const actions = {
  getHistorical: ActionTypes.getHistorical.REQUEST,
  getCurrencyMap: ActionTypes.getCurrencyMap.REQUEST,
  setTabCurrency: ActionTypes.setTabCurrency,
  setCurrentTab: ActionTypes.setCurrentTab,
  addMarket: ActionTypes.addMarket
};
