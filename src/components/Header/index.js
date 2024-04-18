import {StyleSheet, Text, View} from 'react-native';

import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import colors from '../../constant/colors';

export const Header = ({title, refresh, onBack}) => {
  return (
    <View style={styles.header}>
      <SimpleLineIcons
        onPress={onBack}
        name="arrow-left"
        size={18}
        color={colors.icon}
      />
      <Text style={{color: colors.font}}>{title}</Text>
      {refresh ? (
        <SimpleLineIcons
          onPress={refresh}
          name="refresh"
          size={22}
          color={colors.icon}
        />
      ) : (
        <View style={styles.dummy} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 40,
    width: '100%',
    backgroundColor: colors.bg2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  dummy: {height: 23, width: 23},
});
