import React, {Component} from 'react'
import Delete from 'material-ui/svg-icons/action/delete-forever';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import VacancyActions from '../../../../../react/actions/VacancyActions';
import VacancyStore from '../../../../../react/stores/VacancyStore';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
function getStateFromFlux() {
    return VacancyStore.getVacancies()
}


const Vacancies = React.createClass({
    getInitialState(){
        return getStateFromFlux();
    },

    componentWillMount() {
        this.type = 'VACANCIES';
        this.event = this.type + '_LIST_LOADED';
        VacancyActions.loadItems();
    },

    componentDidMount() {
        VacancyStore.addChangeListener(this.event, this._onChange);
    },

    componentWillUnmount() {
        VacancyStore.removeChangeListener(this.event, this._onChange);
    },

    _onChange() {
        this.setState(getStateFromFlux());
    },

    render() {
        return (
            <div className="container item-shadow  table-container">
                <Table fixedHeader={true} selectable={true}>
                    <TableHeader displaySelectAll={false}
                                 adjustForCheckbox={false}>
                        <TableRow>
                            <TableHeaderColumn colSpan="6" tooltip="Super Header" style={{textAlign: 'center'}}>
                                Vacancies
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn>Вакансия</TableHeaderColumn>
                            <TableHeaderColumn>Зарплата</TableHeaderColumn>
                            <TableHeaderColumn>Регион</TableHeaderColumn>
                            <TableHeaderColumn>Требования</TableHeaderColumn>
                            <TableHeaderColumn><Edit/></TableHeaderColumn>
                            <TableHeaderColumn><Delete/></TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        showRowHover={true}
                        stripedRows={false}
                        displayRowCheckbox={false}
                        deselectOnClickaway={true}>
                        {this.state.vacancies}
                    </TableBody>
                </Table>
            </div>
        )
    }
});

module.exports = Vacancies;