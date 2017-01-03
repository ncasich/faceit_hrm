window.jQuery = window.$ = require('jquery');
require('bootstrap-sass');

import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';

const rootRoute = {
    path: '/',
    component: require('./react/react-app'),
    childRoutes: [
        require('./routes/login'),
        require('./routes/logged'),
    ]
};

render(
    <Router history={browserHistory} routes={rootRoute}/>,
    document.getElementById('mount-point')
);


