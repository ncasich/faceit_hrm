import React, {Component} from 'react'
import {Link} from 'react-router';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui/svg-icons/action/delete-forever';
import Edit from 'material-ui/svg-icons/editor/mode-edit';
import './PanelControls.scss';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';


export default  React.createClass({
    getInitialState(){
        return {open: false};
    },
    handleOpen(){
        this.setState({open: true});
    },

    handleClose()    {
        this.setState({open: false});
    },

    render(){
        let smallIcon = {width: 20, height: 20};
        let small = {width: 40, height: 40, padding: 7};
        const actions = [
            <RaisedButton label="Отмена" onTouchTap={this.handleClose}/>,
            <RaisedButton label="Ok" onTouchTap={this.handleClose}/>,
        ];
        return (
            <div className="panel-controls">
                <div className="controls-title">
                    {this.props.title}
                </div>
                <div className="controls">
                    <Link to={'/' + this.props.controller + '/' + this.props.item_id + '/edit'}>
                        <IconButton iconStyle={smallIcon} style={small}>
                            <Edit color={'#fff'} style={{marginRight: '5px'}}/>
                        </IconButton>
                    </Link>
                    <IconButton iconStyle={smallIcon} style={small} onTouchTap={this.handleOpen}>
                        <Delete color={'#fff'}/>
                    </IconButton>
                </div>
                <Dialog actions={actions} modal={false} open={this.state.open} onRequestClose={this.handleClose}>
                    Вы уверены, что хотите удалить {this.props.title}
                </Dialog>
            </div>
        );
    }
});
