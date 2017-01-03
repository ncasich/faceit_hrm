import React, {Component}from 'react';

class Dictionary extends Component {
    render() {
        if (this.props.params.id) {
            return this.props.children;
        }
        else {
            return <div className="container">This is dictionaty page</div>
        }
    }
}

module.exports = Dictionary;