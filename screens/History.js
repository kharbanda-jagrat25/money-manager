import React from "react";
import {
  View,
  Text,
  ScrollView,
  Animated,
} from "react-native";

import Header from "./components/Header";
import GradientContainer from "./components/GradientContainer";
import TransactionList from "./components/TransactionList";

const History = () => {
  
  const scrollY = new Animated.Value(0);
  const headerHeight = 100;
  const triggerOffset = 80;

  const scrollingHeaderTranslate = scrollY.interpolate({
    inputRange: [0, triggerOffset],
    outputRange: [0, -headerHeight],
    extrapolate: "clamp",
  });

  const scrollingHeaderOpacity = scrollY.interpolate({
    inputRange: [0, triggerOffset],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const staticHeaderTranslate = scrollY.interpolate({
    inputRange: [0, triggerOffset],
    outputRange: [headerHeight, 0],
    extrapolate: "clamp",
  });

  const staticHeaderOpacity = scrollY.interpolate({
    inputRange: [0, triggerOffset],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });

  return (
    <GradientContainer>
      <View style={{ flex: 1 }}>
        <Animated.View
          style={{
            marginLeft: "4.3%",
            marginRight: "4.3%",
            height: headerHeight,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            transform: [{ translateY: scrollingHeaderTranslate }],
            opacity: scrollingHeaderOpacity,
            zIndex: 1,
          }}
        >
          <Header showLogo heading="History" />
        </Animated.View>
        <Animated.View
          style={{
            height: headerHeight,
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            transform: [{ translateY: staticHeaderTranslate }],
            opacity: staticHeaderOpacity,
            zIndex: 2,
          }}
        >
          <Text style={{ color: "white", fontWeight: "900", fontSize: 17, marginTop: 50 }}>
            History
          </Text>
        </Animated.View>

        <View style={{ flex: 1, marginTop: headerHeight, marginBottom: 80 }}>
          <ScrollView
            style={{ flex: 1 }}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { y: scrollY } } }],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={20}
          >
            <View>
              <TransactionList />
            </View>
          </ScrollView>
        </View>
      </View>
    </GradientContainer>
  );
};

export default History;