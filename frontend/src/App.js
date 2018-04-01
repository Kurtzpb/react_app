import React, { Component } from "react";
import { connect } from "react-redux";
import { data } from "./testData";

import { Link, Route } from "react-router-dom";

import { ToMainPage } from "./index";

import "./App.css";

@connect(store => {
    return { checkedItems: store.mainReducer.checkedItems };
})
export default class App extends Component {
    _handleChangeInput = item => event => {
        const { checked } = event.target;

        let items = [...this.props.checkedItems];

        if (checked) {
            items.push(item);
        } else {
            items = items.filter(el => el !== item);
        }

        this.props.dispatch({
            type: "SET_ITEM",
            payload: {
                checkedItems: items,
            },
        });
    };

    render() {
        return (
            <div className="App">
                <aside>
                    <ul style={{ textAlign: "left" }}>
                        {data.map(el => {
                            return (
                                <li key={el}>
                                    <Link to={`/${el}`}>{el}</Link>
                                </li>
                            );
                        })}
                    </ul>
                    {data.map(el => <Route key={el} path={`/${el}`} component={ToMainPage} />)}
                </aside>
                {data.map(item => {
                    return (
                        <div key={item}>
                            <input
                                type="checkbox"
                                onChange={this._handleChangeInput(item)}
                                checked={this.props.checkedItems.includes(item)}
                            />
                            <span>{item}</span>
                        </div>
                    );
                })}
            </div>
        );
    }
}
