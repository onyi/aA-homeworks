import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as APIUtil from './util/api_util'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  const store = configureStore();

  window.store = store;
  window.fetchSearchGiphys = APIUtil.fetchSearchGiphys;
  
  ReactDOM.render(<Root store={store} />, root);

})