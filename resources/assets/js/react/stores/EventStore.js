import React from 'react';
import {EventEmitter} from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher.js';


let _enent = {enent:{}};
let _error = null;

const EventStore = Object.assign({}, EventEmitter.prototype, {
    getEvent(){
        return _enent;
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
    if (action.type == 'EVENT_DATA') {
        if (!action.error) {
            console.info(action.message, action.data);
            _enent = {enent: action.data};

        } else {
            console.warn(action.type, action.error);
            _enent = {enent:{}};
            _error = action.error;
        }
        EventStore.emitChange(action.type + '_LOADED');
    }
});

export default EventStore;