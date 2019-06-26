import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import * as APIUtil from './util/api_util'
import { receiveSearchGiphys } from './actions/giphy_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('content');
  const store = configureStore();

  window.store = store;
  window.fetchSearchGiphys = APIUtil.fetchSearchGiphys;
  window.receiveSearchGiphys = receiveSearchGiphys;
  
  ReactDOM.render(<Root store={store} />, root);

})