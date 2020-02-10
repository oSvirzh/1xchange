import { combineReducers } from 'redux';
import authReducer from './auth/reducers';
import coinmarketcapReducer from './coinmarketcap/reducers';

const rootReducer = combineReducers({
  auth: authReducer,
  coinmarketcap: coinmarketcapReducer,
});

export default rootReducer;
