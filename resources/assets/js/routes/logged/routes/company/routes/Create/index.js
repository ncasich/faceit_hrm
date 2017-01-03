module.exports = {
    path: 'create',

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/company-create'))
        }, 'company-create')
    }
};