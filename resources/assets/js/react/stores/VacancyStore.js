import React from 'react';
import {Link} from 'react-router';
import {EventEmitter} from 'events';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import Delete from 'material-ui/svg-icons/action/delete-forever';
import Edit from 'material-ui/svg-icons/editor/mode-edit';

import AppDispatcher from '../dispatcher/AppDispatcher.js';

let _vacancies = {vacancies: []};
let _vacancy = {vacancy:{}};
let _error = null;

function getState(data) {
    _vacancies.current = data.current;
    _vacancies.last = data.last;
    _vacancies.vacancies = [];
    for (let id in data.vacancies) {
        _vacancies.vacancies.push(

                <TableRow key={id}>
                    <TableRowColumn><Link to={'vacancy/' + id}>{data.vacancies[id].title}</Link></TableRowColumn>
                    <TableRowColumn>{data.vacancies[id].salary}</TableRowColumn>
                    <TableRowColumn>{data.vacancies[id].location}</TableRowColumn>
                    <TableRowColumn>{data.vacancies[id].requirements}</TableRowColumn>
                    <TableRowColumn><Edit/></TableRowColumn>
                    <TableRowColumn><Delete/></TableRowColumn>
                </TableRow>

        );
    }
    return _vacancies;
}

const VacancyStore = Object.assign({}, EventEmitter.prototype, {
    getVacancies(){
        return _vacancies;
    },
    getVacancy(){
        return _vacancy;
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
    if (action.type == 'VACANCIES') {
        if (!action.error) {
            console.info(action.message, action.items);
            _vacancies = getState(action.items);

        } else {
            console.warn(action.type, action.error);
            _vacancies = {vacancies: []};
            _error = action.error;
        }
        VacancyStore.emitChange(action.type + '_LIST_LOADED');
    }

    if (action.type == 'VACANCY_DATA') {
        if (!action.error) {
            console.info(action.message, action.data);
            _vacancy = {vacancy: action.data};

        } else {
            console.warn(action.type, action.error);
            _vacancy = {vacancy:{}};
            _error = action.error;
        }
        VacancyStore.emitChange(action.type + '_LOADED');
    }

});

export default VacancyStore;