import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from "./src/components/Portfolio"
require("./css/style.css");
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import reduxThunk from 'redux-thunk';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <Portfolio />
  </Provider>
  , document.getElementById('app')
);
