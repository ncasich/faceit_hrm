module.exports = {
    getChildRoutes(partialNextState, cb) {
        require.ensure([], (require) => {
            cb(null, [
                require('./routes/calendar'),
                require('./routes/companies'),
                require('./routes/company'),
                require('./routes/dictionary'),
                require('./routes/event'),
                require('./routes/organizer'),
                require('./routes/register'),
                require('./routes/users'),
                require('./routes/user'),
                require('./routes/vacancies'),
                require('./routes/vacancy'),
            ])
        }, 'logged-subroutes')
    },

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/logged'))
        }, 'logged')
    },
    onEnter(){
        console.log('logged in layout');
    }
};