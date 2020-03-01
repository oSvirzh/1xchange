import { createReducer } from 'redux-act';
import { ActionTypes } from './actions';
import { defaultChartType } from '../../config/constants';

const initial = {
  historical: {
    quotes: [],
  },
  markets: [{ currency: 0, chartType: defaultChartType }],
  currentTab: 0,
  currencyMap: [],
  isLoading: false,
};

const coinmarketcapReducer = createReducer(
  {
    [ActionTypes.getHistoricalOHLCV.REQUEST]: (state) => {
      return Object.assign({}, state, {
        isLoading: true,
      });
    },
    [ActionTypes.getHistoricalOHLCV.FAILURE]: (state) => {
      return Object.assign({}, state, {
        isLoading: false,
      });
    },
    [ActionTypes.getHistoricalQuotes.REQUEST]: (state) => {
      return Object.assign({}, state, {
        isLoading: true,
      });
    },
    [ActionTypes.getHistoricalQuotes.FAILURE]: (state) => {
      return Object.assign({}, state, {
        isLoading: false,
      });
    },
    [ActionTypes.getHistoricalOHLCV.SUCCESS]: (state, payload) => {
      return Object.assign({}, state, {
        historical: payload,
        isLoading: false,
      });
    },
    [ActionTypes.getHistoricalQuotes.SUCCESS]: (state, payload) => {
      return Object.assign({}, state, {
        historical: payload,
        isLoading: false,
      });
    },
    [ActionTypes.getCurrencyMap.REQUEST]: (state) => {
      return Object.assign({}, state, {
        isLoading: true,
      });
    },
    [ActionTypes.getCurrencyMap.FAILURE]: (state) => {
      return Object.assign({}, state, {
        isLoading: false,
      });
    },
    [ActionTypes.getCurrencyMap.SUCCESS]: (state, payload) => {
      return Object.assign({}, state, {
        currencyMap: payload,
        isLoading: false,
      });
    },
    [ActionTypes.setCurrentTab]: (state, id) => {
      return Object.assign({}, state, {
        currentTab: id,
      });
    },
    [ActionTypes.addMarket]: (state) => {
      let updatedTabs = state.markets.slice();
      updatedTabs.push({ currency: 1, chartType: defaultChartType });
      return Object.assign({}, state, {
        markets: updatedTabs,
      });
    },
    [ActionTypes.updateMarketTab]: (state, { id, ...values }) => {
      let updatedTabs = state.markets.slice();
      updatedTabs[id] = { ...updatedTabs[id], ...values };
      return Object.assign({}, state, {
        markets: updatedTabs,
      });
    },
  },
  initial
);

export default coinmarketcapReducer;
