import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useRecoilValue } from 'recoil';
import { likedPeopleState } from '../state/atoms';
import { dataDummy } from '../data/dummy';
import { SwipeCard } from '../organisms/SwipeCard';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function LikeScreen() {
  const likedPeople = useRecoilValue<number[]>(likedPeopleState);

  const likedData = dataDummy.filter(person => likedPeople.includes(person.id));

  return (
    <SafeAreaProvider style={styles.container}>
      {likedData.length > 0 ? (
        <SwipeCard
          data={likedData}
          handleSwipeRight={() => {}}
          handleSwipeLeft={() => {}}
          isLabel={false}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No liked people yet</Text>
        </View>
      )}
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: 'gray',
  },
});
