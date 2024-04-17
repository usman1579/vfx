import React from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../../constant/colors';

const LinearBg = ({children}) => {
  return (
    <LinearGradient
      colors={[colors.bg1, colors.bg2]}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}
      angle={315}
      style={styles.container}>
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default LinearBg;
