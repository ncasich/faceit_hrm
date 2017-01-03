import React, {Component} from 'react'
import Delete from 'material-ui/svg-icons/action/delete-forever';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import CompanyActions from '../../../../../react/actions/CompanyActions';
import CompanyStore from '../../../../../react/stores/CompanyStore';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
function getStateFromFlux() {
    return CompanyStore.getCompanies()
}


const Companies = React.createClass({
    getInitialState(){
        return getStateFromFlux();
    },

    componentWillMount() {
        this.type = 'COMPANIES';
        this.event = this.type + '_LIST_LOADED';
        CompanyActions.loadItems();
    },

    componentDidMount() {
        CompanyStore.addChangeListener(this.event, this._onChange);
    },

    componentWillUnmount() {
        CompanyStore.removeChangeListener(this.event, this._onChange);
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
                                Companies
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn>Название</TableHeaderColumn>
                            <TableHeaderColumn>Домашняя страница</TableHeaderColumn>
                            <TableHeaderColumn>Регион</TableHeaderColumn>
                            <TableHeaderColumn>Info</TableHeaderColumn>
                            <TableHeaderColumn><Edit/></TableHeaderColumn>
                            <TableHeaderColumn><Delete/></TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        showRowHover={true}
                        stripedRows={false}
                        displayRowCheckbox={false}
                        deselectOnClickaway={true}>
                        {this.state.companies}
                    </TableBody>
                </Table>
            </div>
        )
    }
});

module.exports = Companies;