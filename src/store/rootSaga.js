import { fork } from 'redux-saga/effects';
import {
  handleChangePassword,
  handleConfirmPhoneNumber,
  handleCurrentSession,
  handleRegister,
  handleResendSMS,
  handleResetPassword,
  handleResetPasswordSubmit,
  handleSignOut,
  handleSingIn,
  handleUpdateUserAttribute,
  handleVerifyEmail,
  handleVerifyEmailSubmit,
} from './auth/sagas';
import {
  handleGetHistoricalOHLCV,
  handleGetHistoricalQuotes,
  handleCurrencyMap,
} from './coinmarketcap/sagas';

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

  yield fork(handleGetHistoricalOHLCV);
  yield fork(handleGetHistoricalQuotes);
  yield fork(handleCurrencyMap);
  yield fork(handleChangePassword);
}
