module.exports = {
    path: 'edit',

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/event-edit'))
        }, 'event-edit')
    }
};