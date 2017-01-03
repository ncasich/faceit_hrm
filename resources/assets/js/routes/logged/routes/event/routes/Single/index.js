module.exports = {
    path: ':id',

    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [require('./routes/Edit')])
        }, 'event-single-subroutes')
    },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/event-single'))
        }, 'event-single')
    }
};