import React from 'react';
import {Link} from 'react-router';
import {EventEmitter} from 'events';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import Delete from 'material-ui/svg-icons/action/delete-forever';
import Edit from 'material-ui/svg-icons/editor/mode-edit';

import AppDispatcher from '../dispatcher/AppDispatcher.js';

let _users = {users: []};
let _user = {user:{}};
let _error = null;

function getState(data) {
    _users.current = data.current;
    _users.last = data.last;
    _users.users = [];
    for (let id in data.users) {
        _users.users.push(
            <TableRow key={id}>
                <TableRowColumn><Link to={'user/' + id}>{data.users[id].name}</Link></TableRowColumn>
                <TableRowColumn>{data.users[id].position}</TableRowColumn>
                <TableRowColumn>{data.users[id].salary}</TableRowColumn>
                <TableRowColumn>{data.users[id].added}</TableRowColumn>
                <TableRowColumn>{data.users[id].notes}</TableRowColumn>
                <TableRowColumn><Edit/></TableRowColumn>
                <TableRowColumn><Delete/></TableRowColumn>
            </TableRow>
        );
    }
    return _users;
}

const UserStore = Object.assign({}, EventEmitter.prototype, {
    getUsers(){
        return _users;
    },
    getUser(){
        return _user;
    },
    emitChange(event){
        this.emit(event);
    },
    addChangeListener(event, callback){
        this.on(event, callback);
    },
    removeChangeListener(event, callback){
        this.removeListener(event, callback);
    }
});

AppDispatcher.register(action => {
    if (action.type == 'USERS') {
        if (!action.error) {
            console.info(action.message, action.items);
            _users = getState(action.items);

        } else {
            console.warn(action.type, action.error);
            _users = {users: []};
            _error = action.error;
        }
        UserStore.emitChange(action.type + '_LIST_LOADED');
    }

    if (action.type == 'USER_DATA') {
        if (!action.error) {
            console.info(action.message, action.data);
            _user = {user: action.data};

        } else {
            console.warn(action.type, action.error);
            _user = {user:{}};
            _error = action.error;
        }
        UserStore.emitChange(action.type + '_LOADED');
    }
});

export default UserStore;