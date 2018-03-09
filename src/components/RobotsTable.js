import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'reactstrap';
import {RobotTableRow} from "./RobotTableRow";

export function RobotsTable(props) {
    let table = <Table>
        <tbody>
        <tr>
            <th>Name</th>
            <th>Colour</th>
            <th>Sentient</th>
            <th>Has Wheels</th>
            <th>Number of rotors</th>
            <th>Statuses</th>
            <th/>
        </tr>
        {
            props.robots.map((robot) => {
                return <RobotTableRow robot={robot} buttons={props.buttons} dispatch={props.dispatch}/>
            })
        }
        </tbody>
    </Table>

    return (<div>
        {props.robots.length > 0 ? table : <div>No robots in list</div>}
        </div>);
}

RobotsTable.propTypes = {
    robots: PropTypes.array.isRequired,
    buttons: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired,
};
