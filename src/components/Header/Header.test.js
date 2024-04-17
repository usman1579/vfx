import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header'; // Assuming this test file is in the same directory as Header.js

// Mocking the SimpleLineIcons component
jest.mock('react-native-vector-icons/SimpleLineIcons', () => 'SimpleLineIcons');

describe('Header component', () => {
  const props = {
    title: 'Test Title',
    refresh: jest.fn(),
    onBack: jest.fn(),
  };

  it('renders correctly', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('displays title correctly', () => {
    const wrapper = shallow(<Header {...props} />);
    expect(wrapper.find('Text').props().children).toBe(props.title);
  });

  it('calls onBack when back arrow is pressed', () => {
    const wrapper = shallow(<Header {...props} />);
    wrapper.find('SimpleLineIcons').first().simulate('press');
    expect(props.onBack).toHaveBeenCalled();
  });

  it('calls refresh when refresh icon is pressed', () => {
    const wrapper = shallow(<Header {...props} />);
    wrapper.find('SimpleLineIcons').last().simulate('press');
    expect(props.refresh).toHaveBeenCalled();
  });

  it('renders a dummy view if refresh is not provided', () => {
    const wrapper = shallow(<Header {...props} refresh={null} />);
    expect(wrapper.find('View[style]').exists()).toBeTruthy();
  });
});
