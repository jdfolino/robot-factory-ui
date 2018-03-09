import React from 'react';
import {Badge} from 'reactstrap';
import {RobotButton} from './RobotButton'
import {extinguishRobot, recycleRobot, approveRobot, addRobotToShipping, removeRobotFromShipping} from '../actions';

function getButton(type, robot, props) {
    if (type === 'extinguish') {
        return <RobotButton dispatch={props.dispatch} id={robot.id} colour={'warning'}
                            label={'Extinguish'} fn={extinguishRobot}/>;
    } else if (type === 'recycle') {
        return <RobotButton dispatch={props.dispatch} id={robot.id} colour={'danger'}
                            label={'Recycle'} fn={recycleRobot}/>;
    } else if (type === 'approve') {
        return <RobotButton dispatch={props.dispatch} id={robot.id} colour={'success'}
                            label={'Approve'} fn={approveRobot}/>;
    } else if (type === 'add_to_shipment') {
        return <RobotButton dispatch={props.dispatch} id={robot.id} colour={'success'}
                            label={'Add To Shipment'} fn={addRobotToShipping}/>;
    } else if (type === 'remove_from_shipment') {
        return <RobotButton dispatch={props.dispatch} id={robot.id} colour={'danger'}
                            label={'Remove From Shipment'} fn={removeRobotFromShipping}/>;
    }
    return null;
}

export function RobotTableRow(props) {
    return <tr key={props.robot.id}>
        <td>{props.robot.name}</td>
        <td>{props.robot.configuration.colour}</td>
        <td>{props.robot.configuration.sentience ? 'Yes' : 'No'}</td>
        <td>{props.robot.configuration.wheels ? 'Yes' : 'No'}</td>
        <td>{props.robot.configuration.number_of_rotors}</td>
        <td>{
            props.robot.statuses.map((status, j) => {
                return <Badge key={j}>{status.description.replace('_', ' ')}</Badge>
            })
        }
        </td>
        <td>
            {
                props.buttons && props.buttons.map(type => getButton(type, props.robot, props))
            }
        </td>
    </tr>;
}
