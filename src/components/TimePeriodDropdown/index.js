import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

import {DropdownModal} from '..';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import colors from '../../constant/colors';

const timePeriods = ['Daily', 'Weekly', 'Monthly'];

export const TimePeriodDropdown = ({selectedPeriod, onPeriodChange}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectPeriod = period => {
    onPeriodChange(period);
    setIsOpen(false);
  };

  const renderPeriodItem = period => (
    <TouchableOpacity key={period} onPress={() => handleSelectPeriod(period)}>
      <Text style={styles.renderItemText}>{period}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.dropdownContainer}>
      <Pressable
        testID="dropdown-list"
        style={styles.dropdown}
        onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.text}>{selectedPeriod}</Text>
        <SimpleLineIcons
          name={isOpen ? 'arrow-up' : 'arrow-down'}
          size={8}
          color={colors.icon}
        />
      </Pressable>
      <DropdownModal
        modalVisible={isOpen}
        close={() => setIsOpen(!isOpen)}
        content={
          <View style={styles.dropdownList}>
            {timePeriods.map(renderPeriodItem)}
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 5,
    borderRadius: 2,
    width: '55%',
  },
  dropdown: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  dropdownList: {
    position: 'absolute',
    backgroundColor: '#ccc',
    width: '30%',
    top: 160,
    alignSelf: 'center',
    padding: 5,
  },
  text: {color: colors.font},
  renderItemText: {
    margin: 5,
  },
});
