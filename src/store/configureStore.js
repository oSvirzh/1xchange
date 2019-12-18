import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
//import createLogger from 'redux-logger';
import rootReducer from './rootReducer';
import rootSaga from './auth/sagas';

//const loggerMiddleware = createLogger(); // TODO add loger

export default function configureStore(preloadedState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware)
  );

  sagaMiddleware.run(rootSaga);

  return store;
}
