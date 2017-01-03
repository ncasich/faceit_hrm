import React from 'react';
import AppBar from 'material-ui/AppBar';

import './Navbar.scss';


const NavBar = React.createClass({
    render(){
        return (
            <AppBar
                className="hrm-navbar"
                title="FaceIT HR system"
                onLeftIconButtonTouchTap={this.props.toggle}>
            </AppBar>
        );
    }
});

module.exports = NavBar;