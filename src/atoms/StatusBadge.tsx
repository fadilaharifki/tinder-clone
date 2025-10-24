import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TINDER_GREEN = '#6DE59D';

export default function StatusBadge({ text }: { text: string }) {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: TINDER_GREEN,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 15,
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});
