import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { reactReduxFirebase } from 'react-redux-firebase';
import reducers from './reducers';
import App from './components/App';
import './index.css';

const config = {
  apiKey: "AIzaSyAYGEL7PNQHFLObNrpc8dpKpvCHXY59zSE",
  authDomain: "anesthesiaapp-337a3.firebaseapp.com",
  databaseURL: "https://anesthesiaapp-337a3.firebaseio.com",
  storageBucket: "anesthesiaapp-337a3.appspot.com",
  messagingSenderId: "634025903164"
}

const createStoreWithFirebase = compose(
  reactReduxFirebase(config, { reading: 'readings' }),)(createStore)

let store = createStoreWithFirebase(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());




render(
  <Provider store={ store }>
  <App />
  </Provider>,
  document.getElementById('root')
)
