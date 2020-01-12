import { take, call, put, fork } from 'redux-saga/effects';
import { ActionTypes } from './actions';
import Amplify, { Auth } from 'aws-amplify';

Amplify.configure({
  Auth: {
    userPoolId: process.env.REACT_APP_USER_POOL_ID, //us-east-1_ZaTGWgiz8
    userPoolWebClientId: process.env.REACT_APP_CLIENT_ID, //4hudkmk15t7d2hpntbfusurq7u
    cookieStorage: {
      domain: 'localhost',
      secure: false,
    },
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

const cognitoConfirmPhoneNumber = ({ username, code }) =>
  Auth.confirmSignUp(username, code);

const verifyEmail = () => Auth.verifyCurrentUserAttribute('email');

const cognitoResendSMS = (username) => Auth.resendSignUp(username);

const cognitoSingIn = async ({ email, password }) =>
  Auth.signIn(email, password);

const cognitoCurrentSession = () => Auth.currentSession();

const cognitoUpdateUserAttributes = ({user, payload}) => Auth.updateUserAttributes(user, {...payload});

export function* handleRegister() {
  while (true) {
    try {
      const { payload } = yield take(`${ActionTypes.register.REQUEST}`);
      const result = yield call(cognitoSignUp, payload);
      yield put(ActionTypes.register.SUCCESS({ ...result, ...payload }));
    } catch (error) {
      yield put(ActionTypes.register.FAILURE(error));
    }
  }
}

export function* handleConfirmPhoneNumber() {
  while (true) {
    try {
      const { payload } = yield take(
        `${ActionTypes.confirmPhoneNumber.REQUEST}`
      );
      const result = yield call(cognitoConfirmPhoneNumber, payload);
      yield put(ActionTypes.confirmPhoneNumber.SUCCESS(result));
    } catch (error) {
      yield put(ActionTypes.confirmPhoneNumber.FAILURE(error));
    }
  }
}

export function* handleResendSMS() {
  while (true) {
    try {
      const { payload } = yield take(`${ActionTypes.resendSMS.REQUEST}`);
      const result = yield call(cognitoResendSMS, payload);
      yield put(ActionTypes.resendSMS.SUCCESS(result));
    } catch (error) {
      yield put(ActionTypes.resendSMS.FAILURE(error));
    }
  }
}

export function* handleVerifyCurrentUserAttribute() {
  while (true) {
    try {
      const { payload } = yield take(`${ActionTypes.confirmEmail.REQUEST}`);
      const result = yield call(verifyEmail, payload);
      yield put(ActionTypes.confirmEmail.SUCCESS(result));
    } catch (error) {
      yield put(ActionTypes.confirmEmail.FAILURE(error));
    }
  }
}

export function* handleSingIn() {
  while (true) {
    try {
      const { payload } = yield take(`${ActionTypes.singIn.REQUEST}`);
      const result = yield call(cognitoSingIn, payload);
      yield put(ActionTypes.singIn.SUCCESS({ ...result, ...payload }));
    } catch (error) {
      yield put(ActionTypes.singIn.FAILURE(error));
    }
  }
}

export function* handleCurrentSession() {
  while (true) {
    try {
      const { payload } = yield take(
        `${ActionTypes.getCurrentSession.REQUEST}`
      );
      const result = yield call(cognitoCurrentSession, payload);
      yield put(ActionTypes.getCurrentSession.SUCCESS(result));
    } catch (error) {
      yield put(ActionTypes.getCurrentSession.FAILURE(error));
    }
  }
}

export function* handleUpdateUserAttribute() {
  while (true) {
    try {
      const { payload } = yield take(
        `${ActionTypes.updateUserAttributes.REQUEST}`
      );
      let user = yield Auth.currentAuthenticatedUser();
      const result = yield call(cognitoUpdateUserAttributes, {
        user,
        ...payload,
      });
      yield put(ActionTypes.updateUserAttributes.SUCCESS(result));
    } catch (error) {
      yield put(ActionTypes.updateUserAttributes.FAILURE(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(handleRegister);
  yield fork(handleConfirmPhoneNumber);
  yield fork(handleResendSMS);
  yield fork(handleVerifyCurrentUserAttribute);
  yield fork(handleSingIn);
  yield fork(handleCurrentSession);
  yield fork(handleUpdateUserAttribute);
}
