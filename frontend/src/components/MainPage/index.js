import React from 'react';
import axios from 'axios';

export default class MainPage extends React.Component {
    state = {
        user: '',
    };

    componentDidMount() {
        axios.post('http://localhost:8000', { qwerty: 123 }).then(res => {
            this.setState({ user: res.data.reqponseUser });
        });
    }

    render() {
        const { user } = this.state;
        return <h1>{user}</h1>;
    }
}
