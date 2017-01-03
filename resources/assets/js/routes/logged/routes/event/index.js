module.exports = {
    path: 'event',

    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./routes/Create'),
                require('./routes/Single'),
            ])
        }, 'event-subroutes')
    },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/event'))
        }, 'event')
    }
};