import AppDispatcher from '../dispatcher/AppDispatcher.js';

import app from '../app';

const EventActions = {
    loadEventData(id){
        let type = 'EVENT_DATA';
        app.getEvent(id)
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

export default EventActions;
