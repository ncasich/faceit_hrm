module.exports = {
    path: 'company',

    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./routes/Create'),
                require('./routes/Single'),
            ])
        }, 'company-subroutes')
    },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/company'))
        }, 'company')
    }
};