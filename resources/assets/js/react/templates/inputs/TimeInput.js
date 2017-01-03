import React from 'react';
import TimePicker from 'material-ui/TimePicker';
import areIntlLocalesSupported from 'intl-locales-supported';

let DateTimeFormat;

if (areIntlLocalesSupported(['ru-RU'])) {
    DateTimeFormat = global.Intl.DateTimeFormat;
} else {
    const IntlPolyfill = require('intl');
    DateTimeFormat = IntlPolyfill.DateTimeFormat;
    require('intl/locale-data/jsonp/ru-RU');
}

class TimeInput extends Component {
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

    render(){
        return (
            <div className="col-md-10 col-md-offset-1">
                <TimePicker
                    className='date-picker'
                    hintText="Custom date format"
                    fullWidth={true}
                    mode="landscape"
                    floatingLabelText={this.props.label}
                />
            </div>
        );
    }
}

export default TimeInput;