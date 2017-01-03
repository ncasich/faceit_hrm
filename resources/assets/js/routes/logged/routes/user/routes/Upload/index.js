module.exports = {
    path: 'upload',

    getComponent(nextState, cb) {
        require.ensure([], (require) => {
            cb(null, require('./components/user-upload'))
        }, 'user-upload')
    }
};