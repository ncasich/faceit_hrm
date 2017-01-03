import React from 'react';
import {EventEmitter} from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher.js';


let _dictionary = {dictionary:{}};
let _error = null;

const DictionaryStore = Object.assign({}, EventEmitter.prototype, {
    getDictionary(){
        return _dictionary;
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
    if (action.type == 'DICTIONARY_DATA') {
        if (!action.error) {
            console.info(action.message, action.data);
            _dictionary = {dictionary: action.data};

        } else {
            console.warn(action.type, action.error);
            _dictionary = {dictionary:{}};
            _error = action.error;
        }
        DictionaryStore.emitChange(action.type + '_LOADED');
    }
});

export default DictionaryStore;