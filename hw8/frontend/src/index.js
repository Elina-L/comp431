import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import Reducer from './reducers'

import ReactDOM from 'react-dom';
import App from './app.js';




const logger = createLogger()
const store = createStore(Reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
