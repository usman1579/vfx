import {ActivityIndicator, StyleSheet, View} from 'react-native';
import React from 'react';
import {screenHeight} from '../../constant/dimensions';
import colors from '../../constant/colors';

const Loader = ({loading}) => {
  return (
    <>
      {loading ? (
        <View style={styles.loadStyle}>
          <ActivityIndicator color={colors.border} size={'large'} />
        </View>
      ) : null}
    </>
  );
};

export default Loader;

const styles = StyleSheet.create({
  loadStyle: {
    position: 'absolute',
    top: screenHeight / 2.6,
    height: 100,
    width: 200,
    borderRadius: 5,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: colors.bg1,
  },
});
