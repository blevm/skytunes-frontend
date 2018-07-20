import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  //set default state values here
}

const reducer = (state = initialState, action) => {
  return state;
}

const store = createStore(reducer);

const action = {
  type: "CLICK_EVENT" //variety of things - a string in all caps separated by underscores
}

store.dispatch(action);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
