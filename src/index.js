import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App';

import { AuthProviderWrapper } from './context/auth.context';
import { MessageProviderWrapper } from './context/message.context';
import { ProductProviderWrapper } from './context/products.context';
import { CartProviderWrapper } from './context/cart.context'


ReactDOM.render(
  <AuthProviderWrapper>
  <CartProviderWrapper>
  <ProductProviderWrapper>
    <MessageProviderWrapper>
        <Router>
          <App />
        </Router>
    </MessageProviderWrapper>
  </ProductProviderWrapper>
  </CartProviderWrapper>
  </AuthProviderWrapper>
  ,

  document.getElementById('root')
)