import React, {Component} from 'react';
import Checkbox from 'material-ui/Checkbox';
import './CheckboxInput.scss';

class CheckboxInput extends Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.value};
        this.handleChange = this.handleChange.bind(this);
        this.getValue = this.getValue.bind(this);
    }

    handleChange() {
        this.setState({value: !this.state.value});
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value != nextProps.value)
            this.setState({value: nextProps.value});
    }

    getValue() {
        return this.state.value;
    }

    render() {
        let checked = Boolean(this.state.value);
        const style = {fill: '#32506e'};
        return (
            <div className="col-md-10 col-md-offset-1 checkbox-container">
                <Checkbox label={this.props.label} iconStyle={style} checked={checked} onCheck={this.handleChange}/>
            </div>
        );
    }
}

export default CheckboxInput;