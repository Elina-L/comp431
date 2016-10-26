
// import { login, logout, updateHeadline } from './dummy'
import React from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import Reducer from './reducers'

import ReactDOM from 'react-dom';
// import Reducer from './reducers.js';
import App from './app.js';



// import {render} from 'react-dom';

const logger = createLogger()
const store = createStore(Reducer, applyMiddleware(logger))


// var location = 'profile';

// if (location == 'index') {
// 	ReactDOM.render(<Index/>, document.getElementById('app'));
// }
// if (location == 'main') {
// 	ReactDOM.render(<Main/>, document.getElementById('app'));
// }
// if (location == 'profile') {
// 	ReactDOM.render(<Profile/>, document.getElementById('app'));
// }

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)
