import React, {Component}from 'react';

class Logged extends Component {
    render() {
        return this.props.children
    }
}

module.exports = Logged;