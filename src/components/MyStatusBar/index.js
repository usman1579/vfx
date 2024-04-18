import {Platform, SafeAreaView, StatusBar, StyleSheet} from 'react-native';

import React from 'react';
import colors from '../../constant/colors';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export const MyStatusBar = ({backgroundColor, ...props}) => (
  <SafeAreaView style={[styles.statusBar, {backgroundColor}]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: colors.bg1,
    height: APPBAR_HEIGHT,
  },
});
