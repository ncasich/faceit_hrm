module.exports = {
    path: ':id',

    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [require('./routes/Edit')])
        }, 'dictionary-single-subroutes')
    },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/dictionary-single'))
        }, 'dictionary-single')
    }
};