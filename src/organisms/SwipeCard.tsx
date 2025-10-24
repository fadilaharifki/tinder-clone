/* eslint-disable react-native/no-inline-styles */
import React, { useState, useRef } from 'react';
import { View, Dimensions, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import CardImageCarousel from '../molecules/CardImageCarousel';
import ProfileCard from '../molecules/ProfileCard';
import { ThemeColors } from '../theme/colors';
import { CardData } from '../data/dummy';

const { height, width } = Dimensions.get('window');

interface SwipeCardProps {
  data: CardData[];
  handleSwipeRight?: (index: number) => void;
  handleSwipeLeft?: (index: number) => void;
  isLabel?: boolean;
}

export const SwipeCard = ({
  handleSwipeRight,
  handleSwipeLeft,
  data,
  isLabel = true,
}: SwipeCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const swiperRef = useRef<Swiper<any>>(null);

  return (
    <Swiper
      ref={swiperRef}
      cards={data}
      cardIndex={currentIndex}
      onSwipedRight={handleSwipeRight}
      onSwipedLeft={handleSwipeLeft}
      cardStyle={{
        backgroundColor: ThemeColors.SOFT_BLUE,
      }}
      onSwiped={index => {
        setCurrentIndex(index + 1);
      }}
      renderCard={(card: CardData, index) => {
        const isActive = index === currentIndex;

        return (
          <View style={styles.card} key={card.id}>
            <CardImageCarousel images={card.pictures} isActive={isActive} />

            <ProfileCard
              name={card.name}
              age={card.age}
              location={card.location}
              distance={card.distance}
              isVerified={card.isVerified}
              status={card.status}
            />
          </View>
        );
      }}
      stackSize={3}
      stackSeparation={-10}
      stackScale={1}
      cardHorizontalMargin={10}
      cardVerticalMargin={30}
      backgroundColor={'transparent'}
      verticalSwipe={false}
      infinite
      animateCardOpacity
      showSecondCard
      inputRotationRange={[-100, 0, 100]}
      outputRotationRange={['10deg', '0deg', '-10deg']}
      overlayLabels={
        isLabel
          ? {
              left: {
                element: (
                  <View style={{ flex: 1 }}>
                    <Image
                      source={require('../assets/images/nope.png')}
                      style={styles.nopeIcon}
                    />
                    <Image
                      source={require('../assets/images/x.png')}
                      style={styles.xIcon}
                    />
                  </View>
                ),
                style: {
                  wrapper: { flex: 1 },
                },
              },
              right: {
                element: (
                  <View style={{ flex: 1 }}>
                    <Image
                      source={require('../assets/images/like.png')}
                      style={styles.likeIcon}
                    />
                    <Image
                      source={require('../assets/images/love.png')}
                      style={styles.loveIcon}
                    />
                  </View>
                ),
                style: {
                  wrapper: { flex: 1 },
                },
              },
            }
          : undefined
      }
    />
  );
};

const styles = StyleSheet.create({
  card: {
    height: height * 0.85,
    width: width * 0.98,
    alignSelf: 'center',
    borderRadius: 15,
    backgroundColor: 'white',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  nopeIcon: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: 0,
    right: 0,
  },
  xIcon: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 20,
    left: '50%',
    marginLeft: -50,
  },
  likeIcon: {
    width: 200,
    height: 200,
    position: 'absolute',
    top: 0,
    left: 0,
  },
  loveIcon: {
    width: 100,
    height: 100,
    position: 'absolute',
    bottom: 20,
    left: '50%',
    marginLeft: -50,
  },
});
