import React, {Component} from 'react'
import PanelPrimary from './../panels/PanelPrimary';
import Form from './Form';
import TextInput from './../inputs/TextInput';
import SelectInput from './../inputs/SelectInput';
import RaisedButton from 'material-ui/RaisedButton';
import Save from 'material-ui/svg-icons/content/save';

const VacancyEdit = React.createClass({
    getInitialState(){
        return {vacancy: this.props.vacancy}
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({vacancy: nextProps.vacancy});
    },
    handleSubmit(){
        let vacancy = {
            _token: $('meta[name="csrf-token"]').attr('content'),
            title: this.refs.title.getValue(),
            amount: this.refs.amount.getValue(),
            currency_id: this.refs.currency_id.getValue(),
            location_id: this.refs.location_id.getValue(),
            lang: this.refs.lang.getValue(),
            requirements: this.refs.requirements.getValue()
        };
        console.log('vacancy: ', vacancy);
    },
    render() {
        let vacancy = this.state.vacancy;
        return (
            <PanelPrimary title="Управление вакансией">
                <Form method="post" action="/">
                    <TextInput type="text" label="Вакансия" placeholder="Vacancy Title" value={vacancy.title}
                               ref="title"/>
                    <div className="col-md-10 col-md-offset-1">
                        <div className="row">
                            <div className="col-md-7">
                                <TextInput type="text" label="Зарплата" placeholder="1000"
                                           unwrapped={true} value={vacancy.amount} ref="amount"/>
                            </div>
                            <div className="col-md-5">
                                <SelectInput label="Валюта" unwrapped={true} url="/dictionaries/currency"
                                             value={vacancy.currency_id} ref="currency_id"/>
                            </div>
                        </div>
                    </div>
                    <SelectInput label="Регион" url="/dictionaries/location" value={vacancy.location_id}
                                 ref="location_id"/>
                    <TextInput type="text" label="Языки" placeholder="English, Russian" value={vacancy.lang}
                               ref="lang"/>
                    <TextInput type="text" label="Требования" multiline={true} rows={5} value={vacancy.requirements}
                               ref="requirements"/>
                    <div className="form-group">
                        <div className="col-md-4 col-md-offset-4">
                            <RaisedButton
                                backgroundColor="#32506e"
                                labelColor="#fff"
                                label="Сохранить"
                                default={true}
                                fullWidth={true}
                                icon={<Save />}
                                onClick={this.handleSubmit}/>
                        </div>
                    </div>
                </Form>
            </PanelPrimary>
        )
    }
});

module.exports = VacancyEdit;