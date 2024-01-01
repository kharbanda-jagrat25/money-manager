import React from "react";
import { View, StyleSheet, Text } from "react-native";
import CardCarousel from "./components/CardCarousel";
import Header from "./components/Header";
import GradientContainer from "./components/GradientContainer";

const styles = StyleSheet.create({
  container: {
    marginLeft: 20
  },
  balanceHeading: {
    fontSize: 16,
    fontWeight: "700",
    color: "#94A3D3",
    marginTop: 20
  },
  balanceAmount: {
    fontSize: 26,
    fontWeight: "700",
    color: "#FFFFFF"
  },
  carouselContainer: {
    marginTop: 40,
    height: "100%"
  },
});

const Home = () => {
  return (
    <GradientContainer>
      <View style={styles.container}>
        <Header showLogo heading={"Bank Cards"} />
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