module.exports = {
    path: ':id',

    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./routes/Edit'),
            ])
        }, 'user-single-subroutes')
    },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/user-single'))
        }, 'user-single')
    }
};