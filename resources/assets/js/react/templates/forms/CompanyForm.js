import React, {Component} from 'react'
import PanelPrimary from './../panels/PanelPrimary';
import Form from './Form';
import TextInput from './../inputs/TextInput';
import SelectInput from './../inputs/SelectInput';
import RaisedButton from 'material-ui/RaisedButton';
import Save from 'material-ui/svg-icons/content/save';
import CompanyActions from './../../actions/CompanyActions';

const CompanyEdit = React.createClass({
    getInitialState(){
        return {company: this.props.company}
    },
    componentWillReceiveProps: function (nextProps) {
        this.setState({company: nextProps.company});
    },
    handleSubmit(){
        let company = {
            _token: $('meta[name="csrf-token"]').attr('content'),
            title: this.refs.title.getValue(),
            link: this.refs.link.getValue(),
            info: this.refs.info.getValue(),
            location_id: this.refs.location_id.getValue(),
        };
        if (this.state.company.id)
            company.id = this.state.company.id;
        console.info('company: ', company);
        CompanyActions.saveCompany(company);

    },
    render() {
        let company = this.state.company;
        return (
            <PanelPrimary title="Управление компанией">
                <Form method="post" action="/">
                    <TextInput type="text" label="Название компании" placeholder="FaceIT" value={company.title}
                               ref="title"/>
                    <TextInput type="text" label="Домашняя страница" placeholder="http://faceit-team.com/"
                               value={company.link} ref="link"/>
                    <SelectInput label="Регион" url="/dictionaries/location" value={company.location_id}
                                 ref="location_id"/>
                    <TextInput type="text" label="О компании" multiline={true} rows={5} value={company.info}
                               ref="info"/>
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

module.exports = CompanyEdit;