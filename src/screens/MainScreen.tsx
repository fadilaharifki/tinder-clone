import React from 'react';
import { View, StyleSheet } from 'react-native';
import { dataDummy } from '../data/dummy';
import { SwipeCard } from '../organisms/SwipeCard';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <SwipeCard data={dataDummy} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
