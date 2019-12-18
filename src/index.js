import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/global';
import './styles/styles.scss';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './store/configureStore';

import App from './App';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  window.document.getElementById('root')
);
