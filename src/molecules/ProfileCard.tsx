import React from 'react';
import { View, StyleSheet } from 'react-native';
import LocationRow from '../atoms/LocationRow';
import StatusBadge from '../atoms/StatusBadge';
import VerifiedIcon from '../atoms/VerifiedIcon';
import NameAgeRow from '../molecules/NameAgeRow';

interface ProfileCardProps {
  name: string;
  age: number;
  location: string;
  distance: string;
  isVerified: boolean;
  status: string;
}

export default function ProfileCard({
  name,
  age,
  location,
  distance,
  isVerified,
  status,
}: ProfileCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.infoWrapper}>
        <View style={styles.topRow}>
          <LocationRow text={distance} />
          <StatusBadge text={status} />
        </View>

        <NameAgeRow name={name} age={age} />

        <View style={styles.bottomRow}>
          <LocationRow text={location} />
          {isVerified && <VerifiedIcon />}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  infoWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
});
