/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import FaIcon from 'react-native-vector-icons/FontAwesome5';
import { ThemeColors } from '../theme/colors';

export default function VerifiedIcon() {
  return (
    <FaIcon
      name="check-circle"
      size={18}
      color={ThemeColors.TINDER_BLUE}
      style={{ marginLeft: 10 }}
    />
  );
}
