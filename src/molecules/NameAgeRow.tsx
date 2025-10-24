import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ThemeColors } from '../theme/colors';

interface NameAgeRowProps {
  name: string;
  age: number | string;
}

export default function NameAgeRow({ name, age }: NameAgeRowProps) {
  return (
    <View style={styles.row}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.age}>, {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'baseline', marginBottom: 8 },
  name: {
    fontSize: 28,
    fontWeight: '800',
    color: 'white',
    textShadowColor: ThemeColors.SHADOW_BLACK,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  age: {
    fontSize: 28,
    fontWeight: '400',
    color: 'white',
    textShadowColor: ThemeColors.SHADOW_BLACK,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
