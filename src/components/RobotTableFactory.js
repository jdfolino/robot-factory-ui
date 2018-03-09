import React from 'react';
import { RobotsTable } from '../components/RobotsTable';

export function getRobotTable(props) {
  if (props.activeTab === 'Quality Assurance') {
    return (<div>
      <RobotsTable
        dispatch={props.dispatch}
        fetching={props.fetching}
        robots={props.robotsListQa}
        buttons={['approve', 'recycle']}
      />
    </div>);
  } else if (props.activeTab === 'On Fire') {
    return (<div>
      <RobotsTable
        dispatch={props.dispatch}
        fetching={props.fetching}
        robots={props.robotsListSentientOnFire}
        buttons={['extinguish']}
      />
            </div>);
  } else if (props.activeTab === 'Passed QA') {
    return (<div>
      <RobotsTable
        dispatch={props.dispatch}
        fetching={props.fetching}
        robots={props.robotsListPassedQa}
        buttons={['add_to_shipment']}
      />
    </div>);
  } else if (props.activeTab === 'Recycled') {
    return (<div>
      <RobotsTable fetching={props.fetching} robots={props.robotsListRecycled} buttons={[]} dispatch={props.dispatch}/>
    </div>);
  } else if (props.activeTab === 'Factory Seconds') {
    return (<div>
      <RobotsTable fetching={props.fetching} robots={props.robotsListFactorySeconds} buttons={[]} dispatch={props.dispatch}/>
    </div>);
  } else if (props.activeTab === 'Ready To Ship') {
    return (<div>
      <RobotsTable
          fetching={props.fetching}
          robots={props.robotsListReadyToShip}
          dispatch={props.dispatch}
          buttons={['remove_from_shipment']} />
            </div>);
  } else if (props.activeTab === 'Shipped') {
    return (<div>
      <RobotsTable
          fetching={props.fetching}
          robots={props.robotsListShipped}
          dispatch={props.dispatch}
          buttons={[]} />
    </div>);
  }

  return <div />;
}
