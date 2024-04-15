import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import colors from '../constant/colors';
import Helper from '../helper';

const StockChart = ({dates, keyStats, closingPrices}) => {
  let labels = Helper.formattedDates(dates)?.slice(0, 7)?.reverse();
  return (
    <View style={styles.chartContainer}>
      <Text style={styles.heading}>Overview</Text>
      <LineChart
        data={{
          labels,
          datasets: [
            {
              data: closingPrices?.slice(0, 7).reverse(),
            },
          ],
        }}
        width={400}
        height={200}
        chartConfig={{
          backgroundGradientFrom: colors.bg1,
          backgroundGradientTo: colors.bg2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
      />
      <Text style={styles.heading}>Key Statistics</Text>
      <Stats label="Lowest Closing Price" val={keyStats.lowestClosingPrice} />
      <Stats label="Highest Closing Price" val={keyStats.highestClosingPrice} />
      <Stats label="Avg. Closing Price" val={keyStats.averageClosingPrice} />
      <Stats label="Total Volume" val={keyStats.totalVolume} />
    </View>
  );
};
const Stats = ({label, val}) => {
  return (
    <View style={styles.stats}>
      <Text style={styles.label}>{label}</Text>
      <Text style={{color: colors.font}}>{val ? val : '---'}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  chartContainer: {
    marginTop: 10,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  label: {fontWeight: 'bold', color: colors.font},
  heading: {margin: 10, fontWeight: 'bold', color: colors.font},
});

export default StockChart;
