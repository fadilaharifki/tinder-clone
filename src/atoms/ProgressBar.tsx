import React from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { ThemeColors } from '../theme/colors';

interface ProgressBarProps {
  progress: Animated.Value[];
  activeIndex: number;
}

export default function ProgressBar({
  progress,
  activeIndex,
}: ProgressBarProps) {
  return (
    <View style={styles.indicatorContainer}>
      {progress.map((p, index) => {
        const widthAnim = p.interpolate({
          inputRange: [0, 1],
          outputRange: ['0%', '100%'],
        });

        return (
          <View key={index} style={styles.indicatorBackground}>
            <Animated.View
              style={[
                styles.indicatorBar,
                {
                  width: widthAnim,
                  backgroundColor:
                    index <= activeIndex
                      ? ThemeColors.TINDER_WHITE
                      : ThemeColors.TINDER_GRAY,
                },
              ]}
            />
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  indicatorContainer: {
    position: 'absolute',
    top: 40,
    left: 0,
    right: 0,
    flexDirection: 'row',
    paddingHorizontal: 8,
    zIndex: 10,
  },
  indicatorBackground: {
    flex: 1,
    height: 5,
    marginHorizontal: 2,
    borderRadius: 100,
    backgroundColor: ThemeColors.PROCESSBAR_BLACK,
    overflow: 'hidden',
  },
  indicatorBar: {
    height: '100%',
    borderRadius: 2,
  },
});
