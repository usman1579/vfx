import React, {useMemo, useEffect, useCallback} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import colors from './constant/colors';
import {useDispatch, useSelector} from 'react-redux';
import Loader from './components/Loader';
import {fetchNewsData} from './redux/apiThunks';
import {STOCK_NEWS} from './constant/language';

const NewsItem = ({
  title,
  source,
  sentiment,
  highlight,
  summary,
  banner_image,
}) => (
  <View style={styles.newsItem}>
    {banner_image && (
      <Image source={{uri: banner_image}} style={styles.bannerImage} />
    )}
    <Text numberOfLines={2} style={styles.newsTitle}>
      {title}
    </Text>
    <Text numberOfLines={3} style={styles.newsSummary}>
      {summary}
    </Text>
    <View style={styles.newsInfo}>
      <Text style={styles.newsSource}>{source}</Text>
      <Text style={[styles.newsSentiment, highlight && styles.highlightText]}>
        {sentiment}
      </Text>
    </View>
  </View>
);

const StockNews = () => {
  const newsData = useSelector(state => state.api.newsData);
  const loading = useSelector(state => state.api.newsLoading);
  const data = useMemo(() => newsData, [newsData]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNewsData());
  }, [dispatch]);

  const renderItem = useCallback(({item}) => {
    const highlight = item.ticker_sentiment.some(ticker => ticker.ticker);
    return <NewsItem {...item} highlight={highlight} />;
  }, []);

  return (
    <View style={styles.container}>
      <Loader loading={loading} />
      <FlatList
        data={data}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Text style={styles.heading}>{STOCK_NEWS}</Text>}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
  heading: {
    color: colors.font,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  newsItem: {
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 5,
  },
  bannerImage: {
    width: '100%',
    height: 100,
    marginBottom: 5,
  },
  newsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.border,
  },
  newsSummary: {
    fontSize: 14,
    marginBottom: 5,
    color: colors.border,
  },
  newsInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  newsSource: {
    fontSize: 14,
    color: colors.font,
  },
  newsSentiment: {
    fontSize: 14,
  },
  highlightText: {
    fontWeight: 'bold',
  },
});

export default StockNews;
