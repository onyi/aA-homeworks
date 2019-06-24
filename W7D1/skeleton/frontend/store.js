
import {createStore} from 'redux';
import reducer from './reducer.js';

import { selectLocation } from './actions';
 
const store = createStore(reducer);

// store.getState();
// store.dispatch(selectLocation);
// store.getState();

export default store;