import {Modal, Pressable, StyleSheet} from 'react-native';

import React from 'react';

export const DropdownModal = ({modalVisible, close, content}) => {
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <Pressable style={styles.centeredView} onPress={close}>
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
