import { take, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { ActionTypes } from './actions';

const instance = axios.create({
  baseURL: '/',
  timeout: 1000,
  headers: { 'X-CMC_PRO_API_KEY': process.env.REACT_APP_COINMARKETCAP_API_KEY },
});

const getHistoricalOHLCV = ({ id }) =>
  instance.get('/v1/cryptocurrency/ohlcv/historical', {
    params: {
      id,
      time_start: '2019-02-18T00:00:00.000Z',
      time_end: new Date(),
    },
  });

const getHistoricalQuotes = ({ id }) =>
  instance.get('/v1/cryptocurrency/quotes/historical', {
    params: {
      id,
      interval: '2d',
      time_start: '2019-08-17T00:04:02.000Z',
      time_end: '2019-08-30T18:49:02.000Z',
    },
  });

const getCurrencyMap = ({ symbol, limit }) =>
  instance.get('/v1/cryptocurrency/map', {
    params: {
      symbol,
      limit,
    },
  });

export function* handleGetHistoricalOHLCV() {
  while (true) {
    try {
      const { payload } = yield take(
        `${ActionTypes.getHistoricalOHLCV.REQUEST}`
      );
      const { data } = yield call(getHistoricalOHLCV, payload);
      yield put(ActionTypes.getHistoricalOHLCV.SUCCESS(data.data));
    } catch (error) {
      yield put(ActionTypes.getHistoricalOHLCV.FAILURE(error));
    }
  }
}

export function* handleGetHistoricalQuotes() {
  while (true) {
    try {
      const { payload } = yield take(
        `${ActionTypes.getHistoricalQuotes.REQUEST}`
      );
      const { data } = yield call(getHistoricalQuotes, payload);
      yield put(ActionTypes.getHistoricalQuotes.SUCCESS(data.data));
    } catch (error) {
      yield put(ActionTypes.getHistoricalQuotes.FAILURE(error));
    }
  }
}

export function* handleCurrencyMap() {
  while (true) {
    try {
      const { payload } = yield take(`${ActionTypes.getCurrencyMap.REQUEST}`);
      const { data } = yield call(getCurrencyMap, payload);
      yield put(ActionTypes.getCurrencyMap.SUCCESS(data.data));
    } catch (error) {
      yield put(ActionTypes.getCurrencyMap.FAILURE(error));
    }
  }
}
