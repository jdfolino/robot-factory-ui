import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from 'enzyme';
import {RobotsTable} from './RobotsTable';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });


let robots = [
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
    ]

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RobotsTable robots={[]} buttons={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

test('empty state', () => {
    const table = shallow(<RobotsTable robots={[]} buttons={[robots]} />);
    expect(table.text()).toEqual('No robots in list');
});

it('renders the table row', () => {
    const wrapper = render(<RobotsTable robots={robots} buttons={[]} />);
    expect(wrapper.find('tr').length).toEqual(2);
});

it('renders the robot name', () => {
    const wrapper = mount(<RobotsTable robots={robots} buttons={[]} />);
    expect(wrapper.text()).toMatch(/Robot Name/);
});

it('renders the buttons', () => {
    const wrapper = mount(<RobotsTable robots={robots} buttons={['extinguish']} />);
    expect(wrapper.find('button').length).toEqual(1);
});