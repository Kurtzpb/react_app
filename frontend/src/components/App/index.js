import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link, Route, Switch } from 'react-router-dom';

import './styles/App.css';
import { MainMenu } from '../MainMenu';
import MainPage from '../MainPage';

const Hello = ({ match }) => {
    console.log(match);
    return <h1>{match.url.toUpperCase()}</h1>;
};

const Wrong = ({ match }) => {
    return <h1>Wrong!!!</h1>;
};

@connect(store => {
    return { checkedItems: store.mainReducer.checkedItems };
})
export default class App extends Component {
    render() {
        return (
            <div className="content-main-container">
                <MainMenu match={this.props.match} />
                <Switch>
                    <Route path="/" exact component={MainPage} />
                    <Route path={`/second`} exact component={Hello} />
                    <Route path={`/third`} exact component={Hello} />
                    <Route path={`/fourth`} exact component={Hello} />
                    <Route path={`/fifth`} exact component={Hello} />
                    <Route path={`/sixth`} exact component={Hello} />
                    <Route component={Wrong} />
                </Switch>
            </div>
        );
    }
}
