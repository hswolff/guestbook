import { createStore } from 'redux';
import rootReducer from './data';
window.rootReducer = rootReducer

export default function configureStore(reducer = rootReducer) {
  return createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}