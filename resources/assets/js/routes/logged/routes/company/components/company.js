import React, {Component}from 'react';

class Company extends Component {
    render() {
        return this.props.children
    }
}

module.exports = Company;