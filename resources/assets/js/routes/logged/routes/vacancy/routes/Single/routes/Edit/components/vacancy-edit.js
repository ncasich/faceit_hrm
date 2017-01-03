import React, {Component} from 'react'
import VacancyForm from './../../../../../../../../../react/templates/forms/VacancyForm';

const VacancyEdit = React.createClass({
    render() {
        return (
            <VacancyForm vacancy={this.props.vacancy}/>
        )
    }
});

module.exports = VacancyEdit;