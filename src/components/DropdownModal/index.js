import {Modal, Pressable, StyleSheet} from 'react-native';

import React from 'react';

export const DropdownModal = ({modalVisible, close, content}) => {
  return (
    <Modal
      testID="modal"
      animationType="fade"
      transparent={true}
      visible={modalVisible}>
      <Pressable
        testID="modal-pressable"
        style={styles.centeredView}
        onPress={close}>
        {content}
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
});
