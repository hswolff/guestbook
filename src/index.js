import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
// import configureStore from './configureStore';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  messages: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'addMessage': {
      // state.messages.push(action.payload);
      // return state;
      return {
        messages: state.messages.concat(action.payload),
      };
    }
    default:
      return state;
  }
}

const store = createStore(reducer, initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
