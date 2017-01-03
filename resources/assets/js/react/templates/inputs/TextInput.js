import React from 'react';
import TextField from 'material-ui/TextField';
import classNames from 'classnames';


export default class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.value};
        this.handleChange = this.handleChange.bind(this);
        this.getValue = this.getValue.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value != nextProps.value)
            this.setState({value: nextProps.value});
    }

    getValue(){
        return this.state.value;
    }

    render() {
        const style = {borderColor: '#32506e', color: '#32506e'};
        const {unwrapped, placeholder, label, type, multiline, rows}=this.props;
        const classes = classNames({'col-md-10 col-md-offset-1': !unwrapped});
        return (
            <div className={classes}>
                <TextField
                    onChange={this.handleChange}
                    value={this.state.value || ''}
                    hintText={placeholder}
                    fullWidth={true}
                    floatingLabelFocusStyle={style}
                    underlineFocusStyle={style}
                    floatingLabelText={label}
                    type={type}
                    multiLine={multiline}
                    rows={rows}/>
            </div>
        );
    }
}
