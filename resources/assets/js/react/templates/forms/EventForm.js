import React, {Component} from 'react'
import PanelPrimary from './../panels/PanelPrimary';
import Form from './Form';
import TextInput from './../inputs/TextInput';
import SelectInput from './../inputs/SelectInput';
import RaisedButton from 'material-ui/RaisedButton';
import SvgIcon from 'material-ui/svg-icons/action/account-circle';
import DateInput from './../inputs/DateInput';
import TimeInput from './../inputs/TimeInput';



const EventEdit = React.createClass({
    render() {
        return (
            <PanelPrimary title="Управление компанией">
                <Form method="post" action="/">
                    <SelectInput label="Тип события" url="/event/types"/>
                    <TextInput type="text" label="Название компании" placeholder="FaceIT"/>

                    <TextInput type="text" label="Описание" multiline={true} rows={5} required={true}/>
                    {/*<SelectInput label="УчАстнЕГи" url="/participant/types"/>*/}
                    <DateInput/>
                    <TimeInput/>

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
        )
    }
});

module.exports = EventEdit;
