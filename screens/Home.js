import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CardCarousel from './components/CardCarousel';
import Header from './components/Header';
import GradientContainer from './components/GradientContainer';

const styles = StyleSheet.create({
  container: {
    marginLeft: '4.3%'
  },
  balanceHeading: {
    fontSize: 16,
    fontWeight: 700,
    color: '#94A3D3',
    marginTop: '5%'
  },
  balanceAmount: {
    fontSize: 26,
    fontWeight: 700,
    color: '#FFFFFF'
  },
  card: {
    marginTop: '10%',
    width: '55%',
    height: '45%'
  },
  carouselContainer: {
    marginLeft: "4.3%",
    marginTop: "10%",
    height: '100%'
  },
  fakeContainer: {
    height: '50%'
  }
});

const Home = () => {
  return (
    <GradientContainer>
      <View style={styles.container}>
        <Header showLogo heading={`Bank \n Cards`} />
        <Text style={styles.balanceHeading}>Balance</Text>
        <Text style={styles.balanceAmount}>$2,748.00</Text>
      </View>
      <View style={styles.carouselContainer}>
        <CardCarousel />
      </View>
    </GradientContainer>
  );
};

export default Home;