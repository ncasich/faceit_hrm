import React, {Component} from 'react'
import PanelPrimary from '../../../../../../../react/templates/panels/PanelPrimary';
import PanelControls from '../../../../../../../react/templates/panels/PanelControls';
import EventStore from '../../../../../../../react/stores/EventStore';
import EventActions from '../../../../../../../react/actions/EventActions';

function getStateFromFlux() {
    console.log('flux: ', EventStore.getEvent());
    return EventStore.getEvent()
}

const EventSingle = React.createClass({
    getInitialState(){
        return getStateFromFlux(this.props.params.id);
    },

    componentWillMount() {
        this.type = 'EVENT_DATA';
        this.event = this.type + '_LOADED';
        EventActions.loadEventData(this.props.params.id);
    },

    componentDidMount() {
        EventStore.addChangeListener(this.event, this._onChange);
    },

    componentWillUnmount() {
        EventStore.removeChangeListener(this.event, this._onChange);
    },

    _onChange() {
        this.setState(getStateFromFlux());
    },

    render() {
        let route = this.props.routes[this.props.routes.length - 1];
        if (route.path == 'edit') {
            return <div className="container">{this.props.children}</div>
        } else {
            return (
                <PanelPrimary title={
                    <PanelControls
                        title={this.state.event.title}
                        item_id={this.state.event.id}
                        controller="event"/>}>
                    <table className="table table-stripped">
                        <tbody>
                        <tr>
                            <th className="text-right">З/П:</th>
                            <td>500 USD</td>
                        </tr>
                        <tr>
                            <th className="text-right">Регион:</th>
                            <td>Запорожье</td>
                        </tr>
                        <tr>
                            <th className="text-right">Требования:</th>
                            <td>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis debitis
                                necessitatibus
                                nostrum odit praesentium qui quo ratione recusandae soluta velit. At consectetur, sequi?
                                Aspernatur culpa maxime, quaerat quia saepe ullam.
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </PanelPrimary>
            )
        }
    }
});

module.exports = EventSingle;