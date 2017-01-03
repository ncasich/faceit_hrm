import React, {Component} from 'react'
import PanelPrimary from './../panels/PanelPrimary';
import Form from './Form';
import TextInput from './../inputs/TextInput';
import CheckboxInput from './../inputs/CheckboxInput';
import SelectInput from './../inputs/SelectInput';
import DateInput from './../inputs/DateInput';
import RaisedButton from 'material-ui/RaisedButton';
import SvgIcon from 'material-ui/svg-icons/action/account-circle';

const UserEdit = React.createClass({
    getInitialState(){
        return {user: this.props.user}
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({user: nextProps.user});
    },
    handleSubmit(){
        let user = {
            _token: $('meta[name="csrf-token"]').attr('content'),
            first_name: this.refs.first_name.getValue(),
            last_name: this.refs.last_name.getValue(),
            patronymic: this.refs.patronymic.getValue(),
            birthday: this.refs.birthday.getValue(),
            position_id: this.refs.position_id.getValue(),
            salary: this.refs.salary.getValue(),
            currency_id: this.refs.currency_id.getValue(),
            residence_id: this.refs.residence_id.getValue(),
            cv_src: this.refs.cv_src.getValue(),
            location_id: this.refs.location_id.getValue(),
            relocatable: this.refs.relocatable.getValue(),
            education: this.refs.education.getValue(),
            lang: this.refs.lang.getValue(),
            email: this.refs.email.getValue(),
            phone: this.refs.phone.getValue(),
            skype: this.refs.skype.getValue(),
            user_links: this.refs.user_links.getValue(),
            company_id: this.refs.company_id.getValue(),
            linkedin: this.refs.linkedin.getValue(),
            facebook: this.refs.facebook.getValue(),
            vk: this.refs.vk.getValue(),
            google_plus: this.refs.google_plus.getValue(),
            notes: this.refs.notes.getValue(),
            about: this.refs.about.getValue()
        };
        console.log(user);
    },
    render() {
        let user = this.state.user;
        return (
            <PanelPrimary title="Register">
                <Form method="post" action="/">
                    <TextInput type="text" label="Фамилия" placeholder="Иванов" value={user.last_name} ref="last_name"/>
                    <TextInput type="text" label="Имя" placeholder="Иван" value={user.first_name} ref="first_name"/>
                    <TextInput type="tex" label="Отчество" placeholder="Иванович" value={user.patronymic}
                               ref="patronymic"/>
                    <DateInput label="Дата рождения" value={user.birthday} ref="birthday"/>
                    <SelectInput label="Желаемая должность" url="/dictionaries/position" value={user.position_id}
                                 ref="position_id"/>
                    <div className="col-md-10 col-md-offset-1">
                        <div className="row">
                            <div className="col-md-7">
                                <TextInput type="text" label="Желаемая Зарплата" placeholder="1000"
                                           unwrapped={true} value={user.amount} ref="salary"/>
                            </div>
                            <div className="col-md-5">
                                <SelectInput label="Валюта" unwrapped={true} url="/dictionaries/currency"
                                             value={user.currency_id} ref="currency_id"/>
                            </div>
                        </div>
                    </div>
                    <SelectInput label="Место проживания:" url="/dictionaries/residence" value={user.residence_id}
                                 ref="residence_id"/>
                    <SelectInput label="Ищу работу в:" url="/dictionaries/location" value={user.location_id}
                                 ref="location_id"/>
                    <CheckboxInput label="Готов к переезду" value={user.relocatable} ref="relocatable"/>
                    <TextInput type="text" label="Источник резюме" value={user.cv_src} ref="cv_src"/>
                    <TextInput type="text" label="Образование" placeholder='КА "ШАГ", 2014-2016 гг.'
                               value={user.education} ref="education"/>
                    <TextInput type="text" label="Языки" placeholder="English, Russian" value={user.lang} ref="lang"/>
                    <TextInput type="email" label="E-Mail Address" placeholder="example.email@gmail.com"
                               value={user.email} ref="email"/>
                    <TextInput type="text" label="Телефон" placeholder="+38 (0XX) XXX-XX-XX" value={user.phone}
                               ref="phone"/>
                    <TextInput type="text" label="Skype" value={user.skype} ref="skype"/>
                    <TextInput type="text" label="Мои странички" value={user.user_links} ref="user_links"/>
                    <SelectInput label="Компнаия:" url="/companies" value={user.company_id} ref="company_id"/>
                    <TextInput type="text" label="LinkedIn" value={user.linkedin} ref="linkedin"/>
                    <TextInput type="text" label="Facebook" value={user.facebook} ref="facebook"/>
                    <TextInput type="text" label="Вконтакте" value={user.vk} ref="vk"/>
                    <TextInput type="text" label="Google+" value={user.google_plus} ref="google_plus"/>
                    <TextInput type="text" label="Примечание" value={user.notes} ref="notes"/>
                    <TextInput type="text" label="Описание" multiline={true} rows={5} value={user.about} ref="about"/>
                    <div className="form-group">
                        <div className="col-md-4 col-md-offset-4">
                            <RaisedButton
                                backgroundColor="#32506e"
                                labelColor="#fff"
                                label="Войти"
                                default={true}
                                fullWidth={true}
                                icon={<SvgIcon />}
                                onClick={this.handleSubmit}/>
                        </div>
                    </div>
                </Form>
            </PanelPrimary>
        )
    }
});

module.exports = UserEdit;