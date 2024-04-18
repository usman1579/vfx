import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import Helper from '../helper';
import colors from '../constant/colors';
import {fetchSearchResults} from '../redux/apiThunks';
import {setSearch} from '../redux/apiSlice';
import {useNavigation} from '@react-navigation/core';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const searchResults = useSelector(state => state.api.searchResults);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const inputRef = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      dispatch(fetchSearchResults(searchText));
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [searchText, dispatch]);

  const goToRateScreen = item => {
    navigation.navigate('StockDetail', {tickerSymbol: item['1. symbol']});
    inputRef?.current?.blur();
    dispatch(setSearch([]));
    inputRef?.current?.clear();
  };
  const renderSearchResult = ({item}) => (
    <TouchableOpacity onPress={() => goToRateScreen(item)}>
      <View style={styles.searchResultItem}>
        <Text style={styles.searchResultText}>
          {item['2. name']} ({item['1. symbol']})
        </Text>
        <View style={styles.searchResultInfo}>
          <Text style={styles.infoText}>Region: {item['4. region']}</Text>
          {item['8. currency'] ? (
            <View style={styles.currencyInfo}>
              {Helper.flag(item['8. currency']) ? (
                <Image
                  resizeMode="contain"
                  source={Helper.flag(item['8. currency'])}
                  style={styles.flag}
                />
              ) : null}
              <Text style={styles.currencyText}> {item['8. currency']}</Text>
            </View>
          ) : null}
          <Text style={styles.infoText}>
            Market: {item['5. marketOpen']} - {item['6. marketClose']} (
            {item['7. timezone']})
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container]}>
      <TextInput
        ref={inputRef}
        style={styles.searchInput}
        value={searchText}
        onChangeText={setSearchText}
        placeholderTextColor={'#ccc'}
        placeholder="Search Stock Tickers"
      />

      {searchResults.length > 1 && searchText?.length > 1 && (
        <FlatList
          data={searchResults}
          renderItem={renderSearchResult}
          keyExtractor={item => item['1. symbol']}
          style={styles.dropdownList}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
  },
  searchInput: {
    fontSize: 16,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    marginTop: 10,
    color: '#fff',
  },
  dropdownList: {
    backgroundColor: colors.border,
  },
  flag: {
    height: 22,
    width: 22,
    borderRadius: 2,
  },
  searchResult: {
    padding: 5,
    borderBottomWidth: 1,
  },
  searchResultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  searchResultText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchResultInfo: {
    marginTop: 5,
  },
  infoText: {
    fontSize: 14,
  },
  currencyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  currencyText: {
    marginLeft: 5,
  },
});

export default Search;
