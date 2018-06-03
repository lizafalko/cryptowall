import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App/App.js'
import { Provider } from 'react-redux'
import configureStore from './store/store.js'

ReactDOM.render(
  <Provider store={ configureStore() }>
    <App />
  </Provider>, document.getElementById('root'))
