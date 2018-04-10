import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import { mainReducer } from './reducer';

import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';
import registerServiceWorker from './registerServiceWorker';

import { Route } from 'react-router';
import { Link } from 'react-router-dom';

import logger from 'redux-logger';

import './index.css';

const history = createHistory();

const middlewares = [routerMiddleware(history), thunk, logger];

const store = createStore(
    combineReducers({ routerReducer, mainReducer }),
    composeWithDevTools(applyMiddleware(...middlewares))
);

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route path="/" component={App} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
