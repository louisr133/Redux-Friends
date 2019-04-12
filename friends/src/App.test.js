import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router'
import {Provider} from 'react-redux'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider>
      <Router>
        <App />
      </Router>
    </Provider>
  , div);
  ReactDOM.unmountComponentAtNode(div);
});
