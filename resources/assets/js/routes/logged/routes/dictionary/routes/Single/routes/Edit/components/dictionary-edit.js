import React, {Component} from 'react'
import DictionaryForm from './../../../../../../../../../react/templates/forms/DictionaryForm';

const DictionaryEdit = React.createClass({
    render() {
        return (
            <DictionaryForm dictionary={this.props.dictionary}/>
        )
    }
});

module.exports = DictionaryEdit;