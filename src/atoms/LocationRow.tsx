import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface LocationRowProps {
  iconColor?: string;
  text: string;
}

export default function LocationRow({
  iconColor = 'white',
  text,
}: LocationRowProps) {
  return (
    <View style={styles.row}>
      <Icon name="location-sharp" size={16} color={iconColor} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  text: {
    fontSize: 16,
    color: 'white',
    marginLeft: 5,
    fontWeight: '500',
    textShadowColor: 'rgba(0,0,0,0.75)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
});
