module.exports = {
    path: ':id',

    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [require('./routes/Edit')])
        }, 'vacancy-single-subroutes')
    },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/vacancy-single'))
        }, 'vacancy-single')
    }
};