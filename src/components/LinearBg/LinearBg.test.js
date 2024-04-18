import {LinearBg} from '.'; // Assuming this test file is in the same directory as LinearBg.js
import React from 'react';
import {Text} from 'react-native';
import {shallow} from 'enzyme';

// Mocking colors from '../../constant/colors'
jest.mock('../../constant/colors', () => ({
  bg1: 'someBackgroundColor1', // Provide dummy values
  bg2: 'someBackgroundColor2', // Provide dummy values
}));

describe('LinearBg component', () => {
  it('renders LinearGradient with correct colors and styles', () => {
    const wrapper = shallow(<LinearBg />);
    const gradient = wrapper.find('LinearGradient');

    expect(gradient).toHaveLength(1); // Check for one LinearGradient
    expect(gradient.prop('colors')).toEqual([
      'someBackgroundColor1',
      'someBackgroundColor2',
    ]);
    expect(gradient.prop('start')).toEqual({x: 0, y: 0});
    expect(gradient.prop('end')).toEqual({x: 1, y: 1});
    expect(gradient.prop('angle')).toBe(315);
    expect(wrapper.prop('style')).toEqual(expect.objectContaining({flex: 1})); // Check for flex style
  });

  it('renders children passed to the component', () => {
    const children = <Text>This is some content</Text>;
    const wrapper = shallow(<LinearBg>{children}</LinearBg>);
    expect(wrapper.contains(children)).toBe(true);
  });
});
