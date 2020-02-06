import { take, call, put, fork } from 'redux-saga/effects';
import { ActionTypes } from './actions';
import Amplify, { Auth } from 'aws-amplify';
import { mapCustomUserAttr } from '../utils';

// Amplify.configure({
//   Auth: {
//     userPoolId: process.env.REACT_APP_USER_POOL_ID,
//     userPoolWebClientId: process.env.REACT_APP_CLIENT_ID,
//     cookieStorage: {
//       domain: process.env.REACT_APP_DOMAIN,
//       secure: false,
//     },
//   },
// });

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
const verifyEmailSubmit = ({ code }) =>
  Auth.verifyCurrentUserAttributeSubmit('email', code);

const cognitoResendSMS = (username) => Auth.resendSignUp(username);

const cognitoSignIn = async ({ email, password }) =>
  Auth.signIn(email, password);

const cognitoCurrentSession = () => Auth.currentSession();

const cognitoUpdateUserAttributes = ({ user, payload }) =>
  Auth.updateUserAttributes(user, payload);

const cognitoSignOut = (payload) => Auth.signOut(payload);

const cognitoResetPassword = (payload) => Auth.forgotPassword(payload);

const cognitoResetPasswordSubmit = ({ username, code, password }) =>
  Auth.forgotPasswordSubmit(username, code, password);

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

export function* handleVerifyEmail() {
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

export function* handleVerifyEmailSubmit() {
  while (true) {
    try {
      const { payload } = yield take(
        `${ActionTypes.confirmEmailSubmit.REQUEST}`
      );
      const result = yield call(verifyEmailSubmit, payload);
      yield put(ActionTypes.confirmEmailSubmit.SUCCESS(result));
    } catch (error) {
      yield put(ActionTypes.confirmEmailSubmit.FAILURE(error));
    }
  }
}

export function* handleSingIn() {
  while (true) {
    try {
      const { payload } = yield take(`${ActionTypes.singIn.REQUEST}`);
      const result = yield call(cognitoSignIn, payload);
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
        payload: mapCustomUserAttr(payload),
      });
      yield put(ActionTypes.updateUserAttributes.SUCCESS(result));
    } catch (error) {
      yield put(ActionTypes.updateUserAttributes.FAILURE(error));
    }
  }
}

export function* handleSignOut() {
  while (true) {
    try {
      const { payload } = yield take(`${ActionTypes.signOut.REQUEST}`);
      const result = yield call(cognitoSignOut, payload);
      yield put(ActionTypes.signOut.SUCCESS(result));
    } catch (error) {
      yield put(ActionTypes.signOut.FAILURE(error));
    }
  }
}

export function* handleResetPassword() {
  while (true) {
    try {
      const { payload } = yield take(`${ActionTypes.resetPassword.REQUEST}`);
      const result = yield call(cognitoResetPassword, payload);
      yield put(
        ActionTypes.resetPassword.SUCCESS({ ...result, username: payload })
      );
    } catch (error) {
      yield put(ActionTypes.resetPassword.FAILURE(error));
    }
  }
}

export function* handleResetPasswordSubmit() {
  while (true) {
    try {
      const { payload } = yield take(
        `${ActionTypes.resetPasswordSubmit.REQUEST}`
      );
      const result = yield call(cognitoResetPasswordSubmit, payload);
      yield put(ActionTypes.resetPasswordSubmit.SUCCESS(result));
    } catch (error) {
      yield put(ActionTypes.resetPasswordSubmit.FAILURE(error));
    }
  }
}

export default function* rootSaga() {
  yield fork(handleRegister);
  yield fork(handleConfirmPhoneNumber);
  yield fork(handleResendSMS);
  yield fork(handleVerifyEmail);
  yield fork(handleVerifyEmailSubmit);
  yield fork(handleSingIn);
  yield fork(handleCurrentSession);
  yield fork(handleUpdateUserAttribute);
  yield fork(handleSignOut);
  yield fork(handleResetPassword);
  yield fork(handleResetPasswordSubmit);
}
