module.exports = {
    path: 'vacancies',

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/vacancies'))
        }, 'vacancies')
    }
};