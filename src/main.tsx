import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom';

import App from './App'
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import { GlobalStyles } from './styles/GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />

      <Header />

      <App />

      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
