import React, {Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
injectTapEventPlugin();
import NavBar from './templates/navbar/Navbar';
import {List, ListItem} from 'material-ui/List';

import Register from 'material-ui/svg-icons/social/person-add';
import LogIn from 'material-ui/svg-icons/action/exit-to-app';
import Organizer from 'material-ui/svg-icons/device/access-time';
import Calendar from 'material-ui/svg-icons/action/date-range';
import Company from 'material-ui/svg-icons/action/account-balance';
import Vacancy from 'material-ui/svg-icons/action/work';
import Book from 'material-ui/svg-icons/action/book';
import Upload from 'material-ui/svg-icons/file/file-upload';
import Create from 'material-ui/svg-icons/content/create';
import ViewList from 'material-ui/svg-icons/action/view-list';
import People from 'material-ui/svg-icons/social/people';


const muiTheme = getMuiTheme({
    datePicker: {
        selectColor: '#446e9b',
        calendarTextColor: '#446e9b',
    },
    timePicker: {

        textColor: '#446e9b',
        accentColor: '#446e9b',
        clockColor: '#446e9b',
        headerColor: '#446e9b',
        selectColor: '#446e9b',
    },
});

import './react-app.scss';

const reactApp = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState(){
        return ({open: false})
    },
    menuToggle(){
        this.setState({open: !this.state.open});
    },
    handleClick(path){
        this.context.router.push(path);
        this.setState({open: false});
    },
    render() {
        let itemStyle = {color: '#fff'};
        return (
            // <div className="app">Single App</div>
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="app">
                    <NavBar toggle={this.menuToggle}/>
                    <div className="main-container">
                        <Drawer
                            open={this.state.open} containerClassName="drawer" docked={false}
                            onRequestChange={(open) => this.setState({open})}
                            width={336}
                            containerStyle={{top: '99px'}}>
                            <List>
                                <ListItem primaryText="Login" leftIcon={<LogIn color={'#fff'}/>}
                                          onTouchTap={this.handleClick.bind(null, '/login')}
                                          style={itemStyle}/>
                                <ListItem primaryText="Register" leftIcon={<Register color={'#fff'}/>}
                                          onTouchTap={this.handleClick.bind(null, '/register')}
                                          style={itemStyle}/>
                                <Divider />
                                <ListItem primaryText="Organizer" leftIcon={<Organizer color={'#fff'}/>}
                                          onTouchTap={this.handleClick.bind(null, '/organizer')}
                                          style={itemStyle}/>
                                <ListItem primaryText="Calendar" leftIcon={<Calendar color={'#fff'}/>}
                                          onTouchTap={this.handleClick.bind(null, '/calendar')}
                                          style={itemStyle}/>
                                <Divider />
                                <ListItem
                                    primaryText="Users"
                                    leftIcon={<People color={'#fff'}/>}
                                    primaryTogglesNestedList={true}
                                    style={itemStyle}
                                    nestedItems={[
                                        <ListItem
                                            key={1}
                                            primaryText="Create user manually"
                                            onTouchTap={this.handleClick.bind(null, '/user/create')}
                                            leftIcon={<Create color={'#fff'}/>}
                                            style={itemStyle}
                                        />,
                                        <ListItem
                                            key={2}
                                            primaryText="Upload resume from file"
                                            onTouchTap={this.handleClick.bind(null, '/user/upload')}
                                            leftIcon={<Upload color={'#fff'}/>}
                                            style={itemStyle}
                                        />,
                                        <ListItem
                                            key={3}
                                            primaryText="All users"
                                            onTouchTap={this.handleClick.bind(null, '/users')}
                                            leftIcon={<ViewList color={'#fff'}/>}
                                            style={itemStyle}
                                        />
                                    ]}
                                />
                                <ListItem
                                    primaryText="Vacancies"
                                    leftIcon={<Vacancy color={'#fff'}/>}
                                    primaryTogglesNestedList={true}
                                    style={itemStyle}
                                    nestedItems={[
                                        <ListItem
                                            key={1}
                                            primaryText="Create new vacancy"
                                            onTouchTap={this.handleClick.bind(null, '/vacancy/create')}
                                            leftIcon={<Create color={'#fff'}/>}
                                            style={itemStyle}
                                        />,
                                        <ListItem
                                            key={2}
                                            primaryText="All vacancies"
                                            onTouchTap={this.handleClick.bind(null, '/vacancies')}
                                            leftIcon={<ViewList color={'#fff'}/>}
                                            style={itemStyle}
                                        />
                                    ]}
                                />
                                <ListItem
                                    primaryText="Companies"
                                    leftIcon={<Company color={'#fff'}/>}
                                    primaryTogglesNestedList={true}
                                    style={itemStyle}
                                    nestedItems={[
                                        <ListItem
                                            key={1}
                                            primaryText="Create new company"
                                            onTouchTap={this.handleClick.bind(null, '/company/create')}
                                            leftIcon={<Create color={'#fff'}/>}
                                            style={itemStyle}
                                        />,
                                        <ListItem
                                            key={2}
                                            primaryText="All companies"
                                            onTouchTap={this.handleClick.bind(null, '/companies')}
                                            leftIcon={<ViewList color={'#fff'}/>}
                                            style={itemStyle}
                                        />
                                    ]}
                                />
                                <Divider />
                                <ListItem primaryText="Dictionary" leftIcon={<Book color={'#fff'}/>}
                                          onTouchTap={this.handleClick.bind(null, '/dictionary')}
                                          style={itemStyle}/>
                            </List>
                        </Drawer>
                        <div className="content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
});

module.exports = reactApp;