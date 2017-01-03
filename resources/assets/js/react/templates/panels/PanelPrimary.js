import React, {Component} from 'react'

class PanelPrimary extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-primary">
                            <div className="panel-heading">{this.props.title}</div>
                            <div className="panel-body">{this.props.children}</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PanelPrimary;