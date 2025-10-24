import React from 'react';
import { StyleSheet } from 'react-native';
import { useRecoilState } from 'recoil';
import { dataDummy } from '../data/dummy';
import { SwipeCard } from '../organisms/SwipeCard';
import { likedPeopleState } from '../state/atoms';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MainScreen() {
  const [likedPeople, setLikedPeople] =
    useRecoilState<number[]>(likedPeopleState);

  const handleSwipeRight = (index: number) => {
    const person = dataDummy[index];
    if (!likedPeople.includes(person.id)) {
      setLikedPeople(prev => [...prev, person.id]);
    }
  };

  const handleSwipeLeft = (index: number) => {
    console.log('Nope:', dataDummy[index].name);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SwipeCard
        data={dataDummy}
        handleSwipeRight={handleSwipeRight}
        handleSwipeLeft={handleSwipeLeft}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
