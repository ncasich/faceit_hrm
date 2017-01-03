module.exports = {
    path: 'companies',
    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/companies'))
        },'companies')
    }
};