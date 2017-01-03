import AppDispatcher from '../dispatcher/AppDispatcher.js';

import app from '../app';

const VacancyActions = {
    loadItems(){
        let type = 'VACANCIES';
        app.getVacancies()
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
    loadVacancyData(id){
        let type = 'VACANCY_DATA';
        app.getVacancy(id)
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

export default VacancyActions;
