import {Pressable, StyleSheet, Text} from 'react-native';

import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import colors from '../../constant/colors';

export const FloatingButton = ({onPress}) => {
  return (
    <Pressable style={styles.story2Btn} onPress={onPress}>
      <Text style={styles.text}>Goto Currency Rates</Text>
      <SimpleLineIcons name="arrow-right" size={12} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  story2Btn: {
    flexDirection: 'row',
    position: 'absolute',
    height: 30,
    width: '50%',
    borderRadius: 5,
    backgroundColor: colors.border,
    alignItems: 'center',
    justifyContent: 'space-around',
    bottom: 35,
    right: 25,
  },
  text: {
    fontWeight: '500',
  },
});
