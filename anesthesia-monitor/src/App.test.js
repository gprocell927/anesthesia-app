import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/components/App';

it.skip('renders without crashing', () => {
  const section = document.createElement('section');
  ReactDOM.render(<App />, section);
});
