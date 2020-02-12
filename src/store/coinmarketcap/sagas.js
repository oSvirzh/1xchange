import { take, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { ActionTypes } from './actions';

const instance = axios.create({
  baseURL: 'https://sandbox-api.coinmarketcap.com/v1',
  timeout: 1000,
  headers: { 'X-CMC_PRO_API_KEY': '128470e3-649c-49bb-920b-aca73ef611d5' },
});

const getHistorical = ({ id }) =>
  instance.get('/cryptocurrency/ohlcv/historical', {
    params: {
      id,
      time_start: '2019-02-18T00:00:00.000Z',
      time_end: new Date(),
    },
  });

const getCurrencyMap = ({ symbol, limit }) =>
  instance.get('/cryptocurrency/map', {
    params: {
      symbol,
      limit,
    },
  });

export function* handleGetHistorical() {
  while (true) {
    try {
      const { payload } = yield take(`${ActionTypes.getHistorical.REQUEST}`);
      const { data } = yield call(getHistorical, payload);
      yield put(ActionTypes.getHistorical.SUCCESS(data.data));
    } catch (error) {
      yield put(ActionTypes.getHistorical.FAILURE(error));
    }
  }
}

export function* handleCurrencyMap() {
  while (true) {
    try {
      const { payload } = yield take(`${ActionTypes.getCurrencyMap.REQUEST}`);
      const { data } = yield call(getCurrencyMap, payload);
      console.log('handleCurrencyMap', data);
      yield put(ActionTypes.getCurrencyMap.SUCCESS(data.data));
    } catch (error) {
      yield put(ActionTypes.getCurrencyMap.FAILURE(error));
    }
  }
}
