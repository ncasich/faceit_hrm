import React, {Component}from 'react';

class Event extends Component {
    render() {
        if (this.props.params.id) {
            return this.props.children;
        }
        else {
            return <div className="container">This is events page</div>
        }
    }
}

module.exports = Event;