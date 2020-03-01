import { createAsyncActionTypes } from '../utils';
import { createAction } from 'redux-act';
import { handleGetHistoricalOHLCV } from './sagas';

export const ActionTypes = {
  getHistoricalOHLCV: createAsyncActionTypes('GET HISTORICAL OHLCV'),
  getHistoricalQuotes: createAsyncActionTypes('GET HISTORICAL QUOTES'),
  getCurrencyMap: createAsyncActionTypes('GET CURRENCY MAP'),
  setCurrentTab: createAction('SET CURRENT TAB'),
  addMarket: createAction('ADD NEW MARKET'),
  updateMarketTab: createAction('UPDATE MARKET TAB'),
};

export const actions = {
  getHistoricalOHLCV: ActionTypes.getHistoricalOHLCV.REQUEST,
  getHistoricalQuotes: ActionTypes.getHistoricalQuotes.REQUEST,
  getCurrencyMap: ActionTypes.getCurrencyMap.REQUEST,
  setCurrentTab: ActionTypes.setCurrentTab,
  addMarket: ActionTypes.addMarket,
  updateMarketTab: ActionTypes.updateMarketTab,
};
