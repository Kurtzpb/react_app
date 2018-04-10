import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link, Route } from 'react-router-dom';

import './styles/App.css';
import { MainMenu } from '../MainMenu';

const Hello = ({ match }) => {
    return <h1>{match.params.newPage}</h1>;
};

@connect(store => {
    return { checkedItems: store.mainReducer.checkedItems };
})
export default class App extends Component {
    render() {
        return (
            <div className="content-main-container">
                <MainMenu match={this.props.match} />
                <Route path={`/:newPage`} exact component={Hello} />
            </div>
        );
    }
}
