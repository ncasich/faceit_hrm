import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import {EventEmitter} from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher.js';

let _items = {};
let _error = null;

function createListItem(data) {
    let _data = [];
    for (let [key, val] of Object.entries(data)) {
        _data.push(<MenuItem value={key} key={key} primaryText={val}/>);
    }
    return _data;
}

const SelectStore = Object.assign({}, EventEmitter.prototype, {
    getItems(type){
        return _items[type];
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
    let types = ['CURRENCY', 'POSITION', 'LOCATION', 'RESIDENCE', 'COMPANIES', 'TYPES'];
    if (types.indexOf(action.type) != -1 && action.message.indexOf("_OPTIONS_LOAD")!=-1) {
        if (!action.error) {
            console.info(action.message);
            _items[action.type] = createListItem(action.items);
        } else {
            console.warn(action.type, action.error);
            _items[action.type] = [];
            _error = action.error;
        }
        SelectStore.emitChange(action.type + '_SELECT_CHANGED');
    }
});

export default SelectStore;

