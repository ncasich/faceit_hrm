import AppDispatcher from '../dispatcher/AppDispatcher.js';

import app from '../app';

const CompanyActions = {
    loadItems(){
        let type = 'COMPANIES';
        app.getCompanies()
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
    loadCompanyData(id){
        let type = 'COMPANY_DATA';
        app.getCompany(id)
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
    },
    deleteCompany(id){
        let type = 'COMPANY_DELETE';
        app.deleteCompany(id)
            .then(() => {
                let message = type + '_SUCCESS';
                AppDispatcher.dispatch({
                    type: type,
                    message: message,
                });
            })
            .catch(err=> {
                let message = type + '_FAIL';
                AppDispatcher.dispatch({
                    type: type,
                    message: message,
                    error: err
                });
            })
    },
    saveCompany(company){
        if (company.id) {
            app.updateCompany(company)
        } else {
            app.storeCompany(company)
        }
    }
};

export default CompanyActions;
