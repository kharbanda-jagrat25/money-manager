import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
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
    marginTop: 25
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
  }
});

const Home = ({ navigation }) => {
  return (
    <GradientContainer>
      <View style={styles.container}>
        <Header showLogo heading={<>Bank <br />Cards</>} />
        <Text style={styles.balanceHeading}>Balance</Text>
        <Text style={styles.balanceAmount}>$2,748.00</Text>
      </View>
      <View style={{ marginLeft: "4.3%" }}>
        <CardCarousel />
      </View>
    </GradientContainer>
    // <LinearGradient
    //   colors={['#1A2440', '#313C5C']}
    //   style={styles.gradientContainer}
    //   start={{ x: 0.5, y: 0 }}
    //   end={{ x: 0, y: 0 }}
    // >
    //   <View style={styles.mainContainer}>
    //     <View style={styles.headingContainer}>
    //       <Text style={styles.heading}>Bank <br />Cards</Text>
    //       <Image
    //         source={Logo}
    //         style={styles.logo}
    //       />
    //     </View>
    //     <Text style={styles.balanceHeading}>Balance</Text>
    //     <Text style={styles.balanceAmount}>$2,748.00</Text>
    //     {/* 34px from upper container */}
    //     {/* <View style={{height: "90%"}}> */}
    //     <CardCarousel />

    //     {/* </View> */}
    //     {/* <Image
    //       source={Card1Img}
    //       resizeMode='cover'
    //       style={styles.card}
    //     /> */}
    //   </View>
    // </LinearGradient>
  );
};

export default Home;