import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';

const ToggleBtn = () => {
  const [highlighted, setHighlighted] = useState(true);

  const onPressMain = () => {
    setHighlighted(true);
  };

  const onPressOther = () => {
    setHighlighted(false);
  };
  return (
    <View style={styles.btns}>
      <TouchableWithoutFeedback onPress={onPressMain}>
        <View style={[styles.button, highlighted && styles.highlightedButton]}>
          <Text style={highlighted && styles.highLightedfont}>Main</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={onPressOther}>
        <View style={[styles.button, !highlighted && styles.highlightedButton]}>
          <Text style={!highlighted && styles.highLightedfont}>Other</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
export default ToggleBtn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btns: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 30,
    width: '90%',
    flexDirection: 'row',
    backgroundColor: '#ccc',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 2,
    borderRadius: 5,
  },

  button: {
    height: 50,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlightedButton: {
    height: 45,
    backgroundColor: '#1B2845',
    borderRadius: 5,
  },
  highLightedfont: {color: '#fff', fontWeight: 'bold'},
});
