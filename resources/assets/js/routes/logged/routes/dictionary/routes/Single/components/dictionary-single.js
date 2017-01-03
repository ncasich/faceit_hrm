import React, {Component} from 'react'
import PanelPrimary from '../../../../../../../react/templates/panels/PanelPrimary';
import PanelControls from '../../../../../../../react/templates/panels/PanelControls';
import DictionaryStore from '../../../../../../../react/stores/DictionaryStore';
import DictionaryActions from '../../../../../../../react/actions/DictionaryActions';

function getStateFromFlux() {
    return DictionaryStore.getDictionary()
}

const VacancySingle = React.createClass({
    getInitialState(){
        return getStateFromFlux();
    },

    componentWillMount() {
        this.type = 'DICTIONARY_DATA';
        this.event = this.type + '_LOADED';
        DictionaryActions.loadDictionaryData(this.props.params.id);
    },

    componentDidMount() {
        DictionaryStore.addChangeListener(this.event, this._onChange);
    },

    componentWillUnmount() {
        DictionaryStore.removeChangeListener(this.event, this._onChange);
    },

    _onChange() {
        this.setState(getStateFromFlux());
    },

    render() {
        let route = this.props.routes[this.props.routes.length - 1];
        let dictionary = this.state.dictionary;
        if (route.path == 'edit') {
            var children = React.Children.map(this.props.children, function (child) {
                return React.cloneElement(child, {
                    dictionary: dictionary
                })
            });
            return <div className="container">{children}</div>
        } else {
            return (
                <PanelPrimary title={
                    <PanelControls
                        title={dictionary.value}
                        item_id={dictionary.id}
                        controller="dictionary"/>}>
                    <table className="table table-stripped">
                        <tbody>
                        <tr>
                            <th>Тип</th>
                        </tr>
                        <tr>
                            <td>{dictionary.type}</td>
                        </tr>
                        </tbody>
                    </table>
                </PanelPrimary>
            )
        }
    }
});

module.exports = VacancySingle;