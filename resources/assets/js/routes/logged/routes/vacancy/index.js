module.exports = {
    path: 'vacancy',

    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./routes/Create'),
                require('./routes/Single'),
            ])
        }, 'vacancy-subroutes')
    },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/vacancy'))
        }, 'vacancy')
    }
};