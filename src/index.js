import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import asyncReducer from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const store = createStore(asyncReducer, applyMiddleware(thunk));
export default store;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

