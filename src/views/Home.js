import React, { Component } from 'react';
import Nav from '../components/Nav/';

export default class Home extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="container-fluid">
                <Nav />
                <hr />
                <div>{children}</div>
            </div>
        );
    }
}