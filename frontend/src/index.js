import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import { mainReducer } from "./reducer";

import { Provider } from "react-redux";
import { ConnectedRouter, routerReducer, routerMiddleware } from "react-router-redux";

import createHistory from "history/createBrowserHistory";
import registerServiceWorker from "./registerServiceWorker";

import { Route } from "react-router";
import { Link } from "react-router-dom";

import "./index.css";

const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
    combineReducers({ routerReducer, mainReducer }),
    composeWithDevTools(applyMiddleware(thunk, middleware))
);

export const ToMainPage = ({ match }) => <Link to="/">Return from {match.params.url}</Link>;

const Hello = () => <h1>Hello!</h1>;

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/hello" component={Hello} />
                <Route exact component={ToMainPage} />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")
);

registerServiceWorker();
