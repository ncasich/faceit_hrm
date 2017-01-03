import React, {Component} from 'react'
import UserForm from './../../../../../../../../../react/templates/forms/UserForm';
const UserEdit = React.createClass({
    render() {
        return (
            <UserForm user={this.props.user}/>
        )
    }
});

module.exports = UserEdit;