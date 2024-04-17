import React from 'react';
import {shallow} from 'enzyme';
import Loader from './Loader'; // Assuming this test file is in the same directory as Loader.js

// Mocking the ActivityIndicator component
jest.mock('react-native', () => {
  const {View} = jest.requireActual('react-native');
  return {
    ...jest.requireActual('react-native'),
    ActivityIndicator: 'ActivityIndicator',
    View,
  };
});

// Mocking screenHeight from '../../constant/dimensions'
jest.mock('../../constant/dimensions', () => ({
  screenHeight: 800, // Assuming a default value for testing purposes
}));

// Mocking colors from '../../constant/colors'
const colors = require('../../constant/colors');

describe('Loader component', () => {
  const props = {
    loading: true,
  };

  it('renders correctly when loading is true', () => {
    const wrapper = shallow(<Loader {...props} />);
    expect(wrapper.find('View').prop('style')).toEqual(
      expect.arrayContaining([styles.loadStyle]),
    );
    expect(wrapper.find('ActivityIndicator').prop('color')).toBe(colors.border);
    expect(wrapper.find('ActivityIndicator').prop('size')).toBe('large');
  });

  it('does not render when loading is false', () => {
    const wrapper = shallow(<Loader loading={false} />);
    expect(wrapper.isEmptyRender()).toBe(true);
  });
});
