import AppDispatcher from '../dispatcher/AppDispatcher.js';

import app from '../app';

const UserActions = {
    loadItems(){
        let type = 'USERS';
        app.getUsers()
            .then(data => {
                let message = type + '_LIST_LOAD_SUCCESS';
                AppDispatcher.dispatch({
                    type: type,
                    message: message,
                    items: data
                });
            })
            .catch(err=> {
                let message = type + '_LIST_LOAD_FAIL';
                AppDispatcher.dispatch({
                    type: type,
                    message: message,
                    error: err
                });
            })
    },
    loadUserData(id){
        let type = 'USER_DATA';
        app.getUser(id)
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

export default UserActions;
