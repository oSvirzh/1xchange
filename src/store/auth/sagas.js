import { take, call, put, fork } from 'redux-saga/effects';
import * as AWSCognito from 'amazon-cognito-identity-js';
import { register } from './actions';

const poolData = {
  UserPoolId: process.env.REACT_APP_USER_POOL_ID,
  ClientId: process.env.REACT_APP_CLIENT_ID,
};

const userPool = new AWSCognito.CognitoUserPool(poolData);

const cognitoSignUp = (params) =>
  new Promise((resolve, reject) => {
    const { email, password, phoneNumber } = params;
    let attributeList = [];

    const attributeEmail = new AWSCognito.CognitoUserAttribute({
      Name: 'email',
      Value: email,
    });

    const attributePhoneNumber = new AWSCognito.CognitoUserAttribute({
      Name: 'phone_number',
      Value: phoneNumber,
    });

    attributeList.push(attributeEmail);
    attributeList.push(attributePhoneNumber);

    let cognitoUser;

    userPool.signUp(email, password, attributeList, null, (err, result) => {
      if (err) {
        reject({ payload: err });
        return;
      }
      cognitoUser = result.user;
      resolve({ result });
      console.log('user name is ' + cognitoUser.getUser());
    });
  });

export function* handleRegister() {
  while (true) {
    const action = yield take(`${register.REQUEST}`);
    const { email, password } = action.payload;

    if (email && password) {
      const { payload, err } = yield call(cognitoSignUp, action.payload);

      if (!payload && err) {
        yield put(register.FAILURE(err));
        continue;
      }

      yield put(register.SUCCESS(action.payload));
      continue;
    }

    yield put(register.FAILURE('Please set email and password'));
  }
}

export default function* rootSaga() {
  yield fork(handleRegister);
}
