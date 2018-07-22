import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './reducer';


const store = createStore(reducer);

// const action = {
//   type: "CLICK_EVENT" //variety of things - a string in all caps separated by underscores
// }
//
// store.dispatch(action);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
