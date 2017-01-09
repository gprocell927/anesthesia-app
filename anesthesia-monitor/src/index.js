import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';
import App from './components/App';
import DrugsForm from './components/DrugsForm';
import PAVitals from './components/PAVitals'
import PostOp from './components/PostOp'
import ProcedureSetup from './components/ProcedureSetup'
import LogIn from './components/logIn'
import AddPatient from './components/AddPatient'
import './index.css';

import { BrowserRouter, Match, Miss } from 'react-router'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={App} />
        <Match exactly pattern="/login" component={LogIn} />
        <Match exactly pattern="/addpatient" component={AddPatient} />
        <Match exactly pattern="/proceduresetup" component={ProcedureSetup} />
        <Match exactly pattern="/pavitals" component={PAVitals} />
        <Match exactly pattern="/drugsform" component={DrugsForm} />
      </div>
    </BrowserRouter>
  )
}

render(
  <Provider store={ createStoreWithMiddleware(reducers)}>
  <Root />
  </Provider>,
  document.getElementById('root')
)
