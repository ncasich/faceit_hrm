module.exports = {
    path: 'edit',

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/company-edit'))
        }, 'company-edit')
    }
};