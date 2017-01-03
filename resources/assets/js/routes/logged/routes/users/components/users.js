import React, {Component} from 'react'

import Edit from 'material-ui/svg-icons/editor/mode-edit';
import UserActions from '../../../../../react/actions/UserActions';
import UserStore from '../../../../../react/stores/UserStore';
import Delete from 'material-ui/svg-icons/action/delete-forever';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

function getStateFromFlux() {
    return UserStore.getUsers()
}


const Users = React.createClass({
    getInitialState(){
        return getStateFromFlux();
    },

    componentWillMount() {
        this.type = 'USERS';
        this.event = this.type + '_LIST_LOADED';
        UserActions.loadItems();
    },

    componentDidMount() {
        UserStore.addChangeListener(this.event, this._onChange);
    },

    componentWillUnmount() {
        UserStore.removeChangeListener(this.event, this._onChange);
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
                            <TableHeaderColumn colSpan="7" tooltip="Super Header" style={{textAlign: 'center'}}>
                                Users
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn>Кандидат</TableHeaderColumn>
                            <TableHeaderColumn>Должность</TableHeaderColumn>
                            <TableHeaderColumn>З/П</TableHeaderColumn>
                            <TableHeaderColumn>Добавлен</TableHeaderColumn>
                            <TableHeaderColumn>Примечание</TableHeaderColumn>
                            <TableHeaderColumn><Edit/></TableHeaderColumn>
                            <TableHeaderColumn><Delete/></TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        showRowHover={true}
                        stripedRows={false}
                        displayRowCheckbox={false}
                        deselectOnClickaway={true}>
                        {this.state.users}
                    </TableBody>
                </Table>
            </div>
        )
    }
});

module.exports = Users;