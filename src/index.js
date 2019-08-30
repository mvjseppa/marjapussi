import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxPromise from 'redux-promise'
import thunk from 'redux-thunk'
import reduxWebsocket from 'react-redux-websocket'
import reducers from './reducers/index'

const socket = new WebSocket('wss://mk21sfhu5k.execute-api.eu-central-1.amazonaws.com/dev')

ReactDOM.render(
  <Provider store={applyMiddleware(thunk, ReduxPromise, reduxWebsocket(socket))(createStore)(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
