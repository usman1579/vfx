import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {DropdownModal} from '..';
import Helper from '../../helper';
import React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import colors from '../../constant/colors';
import {currency as currencies} from '../../constant/mock';

export const CurrencyDropdown = ({
  selectedCurrency,
  onCurrencyChange,
  isOpen,
  setIsOpen,
}) => {
  const handleSelectCurrency = code => {
    onCurrencyChange(code);
    setIsOpen(false);
  };

  const renderCurrencyItem = currency => (
    <TouchableOpacity
      style={styles.renderCurrencyItem}
      key={currency.code}
      onPress={() => handleSelectCurrency(currency.code)}>
      <Image
        resizeMode="contain"
        source={currency.flag}
        style={styles.imageRender}
      />
      <Text>
        {currency.name} ({currency.code})
      </Text>
    </TouchableOpacity>
  );

  return (
    <Pressable
      onPress={() => setIsOpen(!isOpen)}
      style={styles.dropdownContainer}>
      <Image
        resizeMode="contain"
        source={Helper.flag(selectedCurrency)}
        style={styles.image}
      />
      <Text style={{color: colors.font}}>{selectedCurrency}</Text>

      <SimpleLineIcons
        name={isOpen ? 'arrow-up' : 'arrow-down'}
        size={8}
        color={colors.icon}
      />

      <DropdownModal
        modalVisible={isOpen}
        close={() => setIsOpen(!isOpen)}
        content={
          <View style={styles.dropdownList}>
            {currencies.map(renderCurrencyItem)}
          </View>
        }
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  dropdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '40%',
    borderWidth: 1,
    borderColor: colors.border,
    padding: 2,
    borderRadius: 2,
  },
  dropdownList: {
    width: 180,
    position: 'absolute',
    backgroundColor: colors.border,
    padding: 10,
    top: 112,
    alignSelf: 'center',
  },
  renderCurrencyItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageRender: {
    height: 22,
    width: 22,
    borderRadius: 2,
    marginRight: 10,
  },
  image: {
    height: 22,
    width: 22,
    borderRadius: 2,
  },
});
