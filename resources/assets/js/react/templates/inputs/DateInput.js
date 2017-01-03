import React, {Component} from 'react'
import DatePicker from 'material-ui/DatePicker';
import areIntlLocalesSupported from 'intl-locales-supported';

let DateTimeFormat;

if (areIntlLocalesSupported(['ru-RU'])) {
    DateTimeFormat = global.Intl.DateTimeFormat;
} else {
    const IntlPolyfill = require('intl');
    DateTimeFormat = IntlPolyfill.DateTimeFormat;
    require('intl/locale-data/jsonp/ru-RU');
}


class DateInput extends Component {
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
        return (
            <div className="col-md-10 col-md-offset-1">
                <DatePicker
                    className='date-picker'
                    hintText="Custom date format"
                    firstDayOfWeek={1}
                    fullWidth={true}
                    container="inline" mode="landscape"
                    floatingLabelText={this.props.label}
                    formatDate={new DateTimeFormat('ru-RU', {
                        day: 'numeric',
                        month: 'numeric',
                        year: 'numeric',
                    }).format}
                />
            </div>
        );
    }
}

export default DateInput;