import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import './index.css';


const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

render(
  <Provider store={ createStoreWithMiddleware(reducers)}>
  <App />
  </Provider>,
  document.getElementById('root')
)
