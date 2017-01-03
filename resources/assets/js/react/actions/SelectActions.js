import AppDispatcher from '../dispatcher/AppDispatcher.js';

import app from '../app';

const SelectActions = {
    loadItems(url){
        let type = url.toUpperCase().split('/').slice(-1).toString();
        app.getSelectData(url)
            .then(data => {
                let message = type + '_OPTIONS_LOAD_SUCCESS';
                AppDispatcher.dispatch({
                    type: type,
                    message: message,
                    items: data
                });
            })
            .catch(err=> {
                let message = type + '_OPTIONS_LOAD_FAIL';
                AppDispatcher.dispatch({
                    type: type,
                    message: message,
                    error: err
                });
            })
    }
};

export default SelectActions;