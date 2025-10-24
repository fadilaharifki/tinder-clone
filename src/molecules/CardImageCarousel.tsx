/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Animated,
  Easing,
  type FlatList as FlatListType,
} from 'react-native';
import ProgressBar from '../atoms/ProgressBar';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width;

interface CardImageCarouselProps {
  images: string[];
  isActive?: boolean;
}

export default function CardImageCarousel({
  images,
  isActive = false,
}: CardImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatListType<string> | null>(null);

  const AUTO_SCROLL_DELAY = 3000;
  const progress = useRef(images.map(() => new Animated.Value(0))).current;

  const animateProgress = useCallback(
    (index: number) => {
      if (!isActive) return;

      progress.forEach((p, i) => {
        if (i !== index) p.stopAnimation();
      });

      progress[index].setValue(0);
      Animated.timing(progress[index], {
        toValue: 1,
        duration: AUTO_SCROLL_DELAY,
        easing: Easing.linear,
        useNativeDriver: false,
      }).start(({ finished }) => {
        if (finished && index < images.length - 1) {
          scrollNext();
        }
      });
    },
    [progress, images.length, isActive],
  );

  const scrollNext = useCallback(() => {
    setActiveIndex(prevIndex => {
      const nextIndex = prevIndex + 1;
      if (nextIndex < images.length && flatListRef.current) {
        flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      }
      return nextIndex;
    });
  }, [images.length]);

  /** 🧠 Efek jalan saat aktif / berhenti saat non-aktif */
  useEffect(() => {
    if (images.length <= 1) return;

    progress.forEach((p, i) => {
      p.stopAnimation();
      if (i < activeIndex) p.setValue(1);
      else p.setValue(0);
    });

    if (isActive) {
      animateProgress(activeIndex);
    }
  }, [activeIndex, images.length, animateProgress, isActive]);

  /** 💡 Reset progress kalau card baru diaktifkan */
  useEffect(() => {
    if (!isActive) {
      progress.forEach(p => p.stopAnimation());
    } else {
      setActiveIndex(0);
      progress.forEach(p => p.setValue(0));
      animateProgress(0);
    }
  }, [isActive, progress, animateProgress]);

  const handleTap = (evt: { nativeEvent: { locationX: number } }) => {
    if (!isActive) return;
    const tapX = evt.nativeEvent.locationX;
    const isRightTap = tapX > CARD_WIDTH / 2;

    let nextIndex = activeIndex;
    if (isRightTap && activeIndex < images.length - 1)
      nextIndex = activeIndex + 1;
    else if (!isRightTap && activeIndex > 0) nextIndex = activeIndex - 1;

    if (nextIndex !== activeIndex && flatListRef.current) {
      progress.forEach(p => p.stopAnimation());
      progress.forEach((p, i) => p.setValue(i < nextIndex ? 1 : 0));
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setActiveIndex(nextIndex);
    }
  };

  const renderItem = ({ item }: { item: string }) => (
    <View style={{ position: 'relative' }}>
      <Image source={{ uri: item }} style={styles.image} />
      <LinearGradient
        colors={['transparent', 'black']}
        style={[
          { position: 'absolute', left: 0, right: 0, top: 350, bottom: 0 },
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.8 }}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={StyleSheet.absoluteFill}
        activeOpacity={1}
        onPress={handleTap}
      >
        <FlatList
          ref={flatListRef}
          data={images}
          renderItem={renderItem}
          keyExtractor={(_, index) => index.toString()}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false}
          style={StyleSheet.absoluteFill}
        />
      </TouchableOpacity>

      <ProgressBar progress={progress} activeIndex={activeIndex} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: CARD_WIDTH,
    height: '100%',
    resizeMode: 'cover',
  },
  gradient: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 350,
    bottom: 0,
  },
});
