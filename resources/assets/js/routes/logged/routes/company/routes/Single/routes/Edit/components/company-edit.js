import React, {Component} from 'react'
import CompanyForm from './../../../../../../../../../react/templates/forms/CompanyForm';

const CompanyEdit = React.createClass({
    render() {
        return (
            <CompanyForm company={this.props.company}/>
        )
    }
});

module.exports = CompanyEdit;