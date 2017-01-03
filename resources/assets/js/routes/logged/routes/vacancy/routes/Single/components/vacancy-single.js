import React, {Component} from 'react'
import PanelPrimary from '../../../../../../../react/templates/panels/PanelPrimary';
import PanelControls from '../../../../../../../react/templates/panels/PanelControls';
import VacancyStore from '../../../../../../../react/stores/VacancyStore';
import VacancyActions from '../../../../../../../react/actions/VacancyActions';


function getStateFromFlux() {
    return VacancyStore.getVacancy()
}

const VacancySingle = React.createClass({
    getInitialState(){
        return getStateFromFlux();
    },

    componentWillMount() {
        this.type = 'VACANCY_DATA';
        this.event = this.type + '_LOADED';
        VacancyActions.loadVacancyData(this.props.params.id);
    },

    componentDidMount() {
        VacancyStore.addChangeListener(this.event, this._onChange);
    },

    componentWillUnmount() {
        VacancyStore.removeChangeListener(this.event, this._onChange);
    },

    _onChange() {
        this.setState(getStateFromFlux());
    },

    render() {
        let route = this.props.routes[this.props.routes.length - 1];
        let vacancy = this.state.vacancy;
        if (route.path == 'edit') {
            var children = React.Children.map(this.props.children, function (child) {
                return React.cloneElement(child, {
                    vacancy: vacancy
                })
            });
            return <div className="container">{children}</div>
        } else {
            return (
                <PanelPrimary title={
                    <PanelControls
                        title={vacancy.title}
                        item_id={vacancy.id}
                        controller="vacancy"/>}>
                    <table className="table table-stripped">
                        <tbody>
                        <tr>
                            <th className="text-right">З/П:</th>
                            <td>{vacancy.salary}</td>
                        </tr>
                        <tr>
                            <th className="text-right">Регион:</th>
                            <td>{vacancy.location}</td>
                        </tr>
                        <tr>
                            <th className="text-right">Требования:</th>
                            <td>{vacancy.requirements}</td>
                        </tr>
                        </tbody>
                    </table>
                </PanelPrimary>
            )
        }
    }
});

module.exports = VacancySingle;