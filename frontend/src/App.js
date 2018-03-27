import React, { Component } from 'react';
import { connect } from 'redux';

import './App.css';

@connect(store => {
    return {}
}) 

export default class App extends Component {
    render() {
        return (
        <div className="App">
            <marquee style={{margin: '5px'}}>Loading...</marquee>
            <h1>Hello!</h1>
        </div>
        );
    }
}
