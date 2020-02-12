import { createReducer } from 'redux-act';
import { ActionTypes } from './actions';

const initial = {
  historical: {
    quotes: [],
  },
  markets: [2],
  currentTab: 0,
  currencyMap: [],
  isLoading: false,
};

const coinmarketcapReducer = createReducer(
  {
    [ActionTypes.getHistorical.REQUEST]: (state) => {
      return Object.assign({}, state, {
        isLoading: true,
      });
    },
    [ActionTypes.getHistorical.FAILURE]: (state) => {
      return Object.assign({}, state, {
        isLoading: false,
      });
    },
    [ActionTypes.getHistorical.SUCCESS]: (state, payload) => {
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
    [ActionTypes.setTabCurrency]: (state, { id, value }) => {
      let updatedTabs = state.markets.slice();
      updatedTabs[id] = value;
      return Object.assign({}, state, {
        markets: updatedTabs,
      });
    },
    [ActionTypes.setCurrentTab]: (state, id) => {
      return Object.assign({}, state, {
        currentTab: id,
      });
    },
    [ActionTypes.addMarket]: (state, id) => {
      let updatedTabs = state.markets.slice();
      updatedTabs.push(1);
      return Object.assign({}, state, {
        markets: updatedTabs,
      });
    },
  },
  initial
);

export default coinmarketcapReducer;
