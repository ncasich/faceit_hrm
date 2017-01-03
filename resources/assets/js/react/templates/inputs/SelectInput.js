import React from 'react'
import SelectField from 'material-ui/SelectField';
import classNames from 'classnames';

import SelectActions from '../../actions/SelectActions';
import SelectStore from '../../stores/SelectStore';

function getStateFromFlux(type) {
    return {items: SelectStore.getItems(type)}
}

export default class SelectInput extends React.Component {
    constructor(props) {
        super(props);
        let value = this.props.value ? this.props.value.toString() : null;
        this.state = {value: value};
        this.handleChange = this.handleChange.bind(this);
        this._onChange = this._onChange.bind(this);
        this.getValue = this.getValue.bind(this);
    }

    handleChange(event, index, value) {
        this.setState({value});
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.value != nextProps.value) {
            this.setState({value: nextProps.value.toString()});
        }
    }

    componentWillMount() {
        this.type = this.props.url.toUpperCase().split('/').slice(-1).toString();
        this.event = this.type + '_SELECT_CHANGED';
        SelectActions.loadItems(this.props.url);
    }

    componentDidMount() {
        SelectStore.addChangeListener(this.event, this._onChange);
    }

    componentWillUnmount() {
        SelectStore.removeChangeListener(this.event, this._onChange);
    }

    _onChange() {
        this.setState(getStateFromFlux(this.type));
    }

    getValue(){
        return this.state.value;
    }

    render() {
        const {unwrapped, label}=this.props;
        const classes = classNames({'col-md-10 col-md-offset-1': !unwrapped});
        return (
            <div className={classes}>
                <SelectField
                    floatingLabelText={label}
                    value={this.state.value}
                    fullWidth={true}
                    onChange={this.handleChange}
                    maxHeight={200}>
                    {this.state.items}
                </SelectField>
            </div>
        );
    }
}