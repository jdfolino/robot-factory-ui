import React from 'react';
import {Button} from 'reactstrap';

export class RobotButton extends React.Component {
    constructor(){
        super()
        this.state = {
            disabled: false
        }
    }

    render() {
        return (<Button
            disabled={this.state.disabled}
            color={this.props.colour}
            onClick={() => {
                this.setState({disabled: true})
                this.props.fn(this.props.dispatch, this.props.id);
            }}
        >{this.props.label}
        </Button>);
    }
}