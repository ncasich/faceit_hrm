import React, {Component}from 'react';

class User extends Component {
    render() {
        return this.props.children
    }
}

module.exports = User;