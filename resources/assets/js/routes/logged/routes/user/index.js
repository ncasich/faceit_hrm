module.exports = {
    path: 'user',

    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./routes/Create'),
                require('./routes/Upload'),
                require('./routes/Single'),
            ])
        }, 'user-subroutes')
    },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/user'))
        }, 'user')
    }
};