import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './styles/global';
import './styles/styles.scss';
import { BrowserRouter } from 'react-router-dom';

import configureStore from './store/configureStore';

import { App } from './App';

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  window.document.getElementById('root')
);
