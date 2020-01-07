import { take, call, put, fork } from 'redux-saga/effects';
import { register } from './actions';
import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
  Auth: {
    userPoolId: process.env.REACT_APP_USER_POOL_ID, //us-east-1_ZaTGWgiz8
    userPoolWebClientId: process.env.REACT_APP_CLIENT_ID, //4hudkmk15t7d2hpntbfusurq7u
  },
});

const cognitoSignUp = ({ email, password, phoneNumber, country }) =>
  Auth.signUp({
    username: email,
    password: password,
    attributes: {
      email: email,
      phone_number: country.code + phoneNumber,
      'custom:country': JSON.stringify(country),
    },
  });

export function* handleRegister() {
  while (true) {
    try {
      const { payload } = yield take(`${register.REQUEST}`);
      const result = yield call(cognitoSignUp, payload);
      yield put(register.SUCCESS(result));
    } catch (error) {
      yield put(register.FAILURE(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(handleRegister);
}
