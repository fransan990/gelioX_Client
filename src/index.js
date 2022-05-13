import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App';

import { AuthProviderWrapper } from './context/auth.context';
import { MessageProviderWrapper } from './context/message.context';

ReactDOM.render(
  <MessageProviderWrapper>
    <AuthProviderWrapper>
      <Router>
        <App />
      </Router>
    </AuthProviderWrapper>
  </MessageProviderWrapper>,

  document.getElementById('root')
)