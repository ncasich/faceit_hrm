module.exports = {
    path: 'dictionary',

    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./routes/Create'),
                require('./routes/Single'),
            ])
        }, 'dictionary-subroutes')
    },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/dictionary'))
        }, 'dictionary')
    }
};