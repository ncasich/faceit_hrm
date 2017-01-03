export default {
    getSelectData(url) {
        return new Promise((resolve, reject) => {
            $.getJSON(url, {shorted: true}, json => {
                resolve(json);
            });
        })
    },
    getUsers() {
        return new Promise((resolve, reject) => {
            $.getJSON('/users', json => {
                resolve(json);
            });
        })
    },
    getUser(id) {
        return new Promise((resolve, reject) => {
            $.getJSON('/user/' + id, json => {
                resolve(json);
            });
        })
    },
    getCompanies() {
        return new Promise((resolve, reject) => {
            $.getJSON('/companies', json => {
                resolve(json);
            });
        })
    },
    getCompany(id) {
        return new Promise((resolve, reject) => {
            $.getJSON('/company/' + id, json => {
                resolve(json);
            });
        })
    },
    storeCompany(company){
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/company',
                type: 'POST',
                data: company,
                success: (data) => {
                    console.log(data);
                    resolve(data);
                }
            });
        })
    },
    updateCompany(company){
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/company/' + company.id,
                type: 'PUT',
                data: company,
                success: (data) => {
                    console.log(data);
                    resolve(data);
                }
            });
        })
    },
    deleteCompany(id){
        return new Promise((resolve, reject) => {
            $.ajax({
                url: '/company/' + id,
                type: 'DELETE',
                success: ()=> {
                    resolve();
                },
                error: (err)=> {
                    reject(err);
                }
            });
        })
    },
    getVacancies() {
        return new Promise((resolve, reject) => {
            $.getJSON('/vacancies', json => {
                resolve(json);
            });
        })
    },
    getVacancy(id) {
        return new Promise((resolve, reject) => {
            $.getJSON('/vacancy/' + id, json => {
                resolve(json);
            });
        })
    },
    getDictionary(id) {
        return new Promise((resolve, reject) => {
            $.getJSON('/dictionary/' + id, json => {
                resolve(json);
            });
        })
    },
    getEvent(id) {
        return new Promise((resolve, reject) => {
            $.getJSON('/event/' + id, json => {
                resolve(json);
            });
        })
    },

}