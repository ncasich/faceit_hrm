import React, {Component} from 'react'

class Form extends Component {
    render() {
        return (
            <form className="form-horizontal" method={this.props.method} action={this.props.action}>
                {this.props.children}
            </form>
        );
    }
}

export default Form;