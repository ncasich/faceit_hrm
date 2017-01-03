import React, {Component} from 'react'
import PanelPrimary from './../panels/PanelPrimary';
import Form from './Form';
import TextInput from './../inputs/TextInput';
import SelectInput from './../inputs/SelectInput';
import RaisedButton from 'material-ui/RaisedButton';
import Save from 'material-ui/svg-icons/content/save';

const DictionaryForm = React.createClass({
    getInitialState(){
        return {dictionary: this.props.dictionary}
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({dictionary: nextProps.dictionary});
    },
    handleSubmit(){
        let item = {
            _token: $('meta[name="csrf-token"]').attr('content'),
            value: this.refs.value.getValue(),
            type: this.refs.type_id.getValue(),
        };
        console.log(item);
    },
    render() {
        let dictionary = this.state.dictionary;
        return (
            <PanelPrimary title="Управление словарем">
                <Form method="post" action="/">
                    <div className="col-md-10 col-md-offset-1">
                        <div className="row">
                            <div className="col-md-7">
                                <TextInput type="text" label="Значение" placeholder="Значение" unwrapped={true}
                                           value={dictionary.value} ref="value"/>
                            </div>
                            <div className="col-md-5">
                                <SelectInput label="Тип" unwrapped={true} url="/dictionaries/types"
                                             value={dictionary.type_id} ref="type_id"/>
                            </div>
                        </div>
                    </div>
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

module.exports = DictionaryForm;