import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';
import {Text} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

describe('Header Component', () => {
  const mockProps = {
    title: 'Test Title',
    refresh: jest.fn(),
    onBack: jest.fn(),
  };

  it('renders without crashing', () => {
    shallow(<Header {...mockProps} />);
  });

  it('displays correct title', () => {
    const wrapper = shallow(<Header {...mockProps} />);
    expect(wrapper.find(Text).props().children).toEqual(mockProps.title);
  });

  it('calls onBack function when back button is pressed', () => {
    const wrapper = shallow(<Header {...mockProps} />);
    wrapper.find(SimpleLineIcons).first().props().onPress();
    expect(mockProps.onBack).toHaveBeenCalled();
  });

  it('calls refresh function when refresh button is pressed', () => {
    const wrapper = shallow(<Header {...mockProps} />);
    wrapper.find(SimpleLineIcons).last().props().onPress();
    expect(mockProps.refresh).toHaveBeenCalled();
  });

  it('renders dummy view when refresh function is not provided', () => {
    const propsWithoutRefresh = {...mockProps, refresh: undefined};
    const wrapper = shallow(<Header {...propsWithoutRefresh} />);
    expect(wrapper.find('.dummy')).toHaveLength(1);
  });
});
