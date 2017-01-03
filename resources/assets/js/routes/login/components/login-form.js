import React, {Component} from 'react'
import PanelPrimary from '../../../react/templates/panels/PanelPrimary';
import Form from '../../../react/templates/forms/Form';
import TextInput from '../../../react/templates/inputs/TextInput';
import CheckboxInput from '../../../react/templates/inputs/CheckboxInput';
import SelectInput from '../../../react/templates/inputs/SelectInput';
import DateInput from '../../../react/templates/inputs/DateInput';
import RaisedButton from 'material-ui/RaisedButton';
import SvgIcon from 'material-ui/svg-icons/action/account-circle';


class RegisterForm extends Component {
    render() {
        return (
            <PanelPrimary title="Login">
                <Form method="post" action="/">
                    <TextInput type="email" label="E-Mail Address" placeholder="example.email@gmail.com"/>
                    <TextInput type="password" label="Password" placeholder="your secret"/>
                    <div className="form-group">
                        <div className="col-md-4 col-md-offset-4">
                            <RaisedButton
                                backgroundColor="#32506e"
                                labelColor="#fff"
                                label="Войти"
                                default={true}
                                fullWidth={true}
                                icon={<SvgIcon />}/>
                        </div>
                    </div>
                </Form>
            </PanelPrimary>
        );
    }
}

module.exports = RegisterForm;