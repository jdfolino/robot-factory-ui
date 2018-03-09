import React from 'react';
import PropTypes from 'prop-types';
import { Nav, NavLink, Button } from 'reactstrap';

import {shipIt, fetchAllRobots, TAB_CHANGED} from "../actions";
import {getRobotTable} from "../components/RobotTableFactory";

class AppContainer extends React.Component {
    constructor() {
        super()
        this.changeSection = this.changeSection.bind(this);
    }

    static propTypes = {
        activeTab: PropTypes.string.isRequired,
        robotsListQa: PropTypes.array.isRequired,
        robotsListPassedQa: PropTypes.array.isRequired,
        robotsListRecycled: PropTypes.array.isRequired,
        robotsListSentientOnFire: PropTypes.array.isRequired,
        robotsListFactorySeconds: PropTypes.array.isRequired,
        robotsListReadyToShip: PropTypes.array.isRequired,
        robotsListShipped: PropTypes.array.isRequired,
    }

    componentDidMount() {
        fetchAllRobots(this.props.dispatch)
    }

    changeSection = (section) => {
        this.props.dispatch({type: TAB_CHANGED, activeTab: section})
    }

    render() {
        return (
            <div className="App">
                <Nav>
                  <NavLink href="#" onClick={() => {this.changeSection('Recycled')}}>Recycled</NavLink>
                  <NavLink href="#" onClick={() => {this.changeSection('On Fire')}}>On Fire</NavLink>
                  <NavLink href="#" onClick={() => {this.changeSection('Quality Assurance')}}>Quality Assurance</NavLink>
                  <NavLink href="#" onClick={() => {this.changeSection('Factory Seconds')}}>Factory Seconds</NavLink>
                  <NavLink href="#" onClick={() => {this.changeSection('Passed QA')}}>Passed QA</NavLink>
                  <NavLink href="#" onClick={() => {this.changeSection('Ready To Ship')}}>Ready To Ship</NavLink>
                  <NavLink href="#" onClick={() => {this.changeSection('Shipped')}}>Shipped</NavLink>
                </Nav>
              <h1>{this.props.activeTab}</h1>
                {
                    this.props.activeTab === 'Ready To Ship' ?
                    <div><Button onClick={() => {
                        shipIt(this.props.dispatch,
                          this.props.robotsListReadyToShip.map((e) => {return e.id}))
                    }
                    }>Send Shipment</Button></div> :
                    null
                }
              {getRobotTable(this.props)}
            </div>
        );
    }
}

export default AppContainer;
