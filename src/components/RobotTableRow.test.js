import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from 'enzyme';
import {RobotTableRow} from './RobotTableRow';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

let robot =
    {
        "id": 12,
        "name": "Robot Name",
        "stage": "qa",
        "configuration": {
            "sentience": true,
            "wheels": false,
            "tracks": true,
            "number_of_rotors": 10,
            "colour": "blue"
        },
        "statuses": [
            {
                "description": "scratched_paint"
            }
        ]
    }


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RobotTableRow robot={robot} buttons={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the buttons given', () => {
    const wrapper = render(<RobotTableRow robot={robot} buttons={['recycle', 'approve']}  />);
    expect(wrapper.find('button').length).toEqual(2);
});
