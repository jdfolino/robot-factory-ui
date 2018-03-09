import React from 'react';
import ReactDOM from 'react-dom';
import {shallow, render, mount} from 'enzyme';
import {RobotButton} from './RobotButton';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<RobotButton robots={[]} buttons={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the table row', () => {
    const wrapper = render(<RobotButton label={'a label'} />);
    expect(wrapper.text()).toMatch(/a label/);
});
