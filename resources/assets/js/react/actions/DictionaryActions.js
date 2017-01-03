import AppDispatcher from '../dispatcher/AppDispatcher.js';

import app from '../app';

const DictionaryActions = {
    loadDictionaryData(id){
        let type = 'DICTIONARY_DATA';
        app.getDictionary(id)
            .then(data => {
                let message = type + '_LOAD_SUCCESS';
                AppDispatcher.dispatch({
                    type: type,
                    message: message,
                    data: data
                });
            })
            .catch(err=> {
                let message = type + '_LOAD_FAIL';
                AppDispatcher.dispatch({
                    type: type,
                    message: message,
                    error: err
                });
            })
    }
};

export default DictionaryActions;
