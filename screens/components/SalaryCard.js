import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, View, Text } from "react-native";
import { Modalize } from "react-native-modalize";

import GradientContainer from "./GradientContainer";
import Header from "./Header";
import TransactionList from "./TransactionList";

import BackArrowIcon from "../../assets/icons/backArrow.svg";
import CardFrontImg from "../../assets/images/CardFront.svg";
import CardBackImg from "../../assets/images/CardBack.svg";
import ClockSvg from "../../assets/icons/clock.svg";
import ShareSvg from "../../assets/icons/share.svg";

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: "10%",
    marginLeft: "4.3%",
    flex: 1,
  },
  backArrowIcon: {
    width: 20,
    height: 20,
  },
  heading: {
    marginTop: 0,
  },
  card: {
    width: 365,
    height: 231,
    marginLeft: "1.5%",
  },
  secondaryContainer: {
    marginLeft: "4.3%",
    marginRight: "4.3%",
    height: "55%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  balanceHeading: {
    fontSize: 16,
    fontWeight: 700,
    color: "rgba(148, 163, 211, 1)",
    marginTop: "5%",
  },
  balanceAmount: {
    fontSize: 26,
    fontWeight: 700,
    color: "#FFFFFF",
  },
  icon: {
    width: "35%",
    height: "35%",
  },
  outlineButton: {
    marginRight: "4.3%",
    width: "54px",
    height: "54px",
    borderRadius: 10,
    border: "1px solid rgba(255, 255, 255, 0.2)",
    color: "#7295FB",
    fontSize: "16px",
    fontWeight: "500",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    flex: 1,
    marginTop: "10%",
    justifyContent: "flex-end",
  },
});

const SalaryCard = () => {
  const modalizeRef = useRef(null);
  const navigation = useNavigation();

  const [isCardPressed, setCardPressed] = useState(false);
  const [showStaticHeader, setShowStaticHeader] = useState(false);

  const navigateBack = () => navigation.navigate("Home");

  return (
    <GradientContainer styles={{ overflow: "hidden" }}>
      <View style={styles.mainContainer}>
        <View style={{ flexDirection: "row" }}>
          <Pressable onPress={navigateBack}>
            <Image
              source={BackArrowIcon}
              alt="back"
              style={styles.backArrowIcon}
            />
          </Pressable>
          {showStaticHeader ? (
            <Text
              style={{
                flex: 1,
                alignIems: "center",
                justifyContent: "center",
                display: "flex",
                fontSize: "17px",
                fontWeight: 900,
                color: "white",
              }}
            >
              Salary Card
            </Text>
          ) : null}
        </View>
        <View style={{ marginBottom: "3%" }}>
          {showStaticHeader ? null : (
            <Header
              heading={
                <View>
                  <Text>Salary</Text>
                  <Text>Card</Text>
                </View>
              }
              style={styles.heading}
            />
          )}
        </View>
        <Pressable
          onPressIn={() => setCardPressed(true)}
          onPressOut={() => setCardPressed(false)}
        >
          <Image
            source={isCardPressed ? CardBackImg : CardFrontImg}
            style={styles.card}
            sharedTransitionTag="tag"
          />
        </Pressable>
      </View>
      <View style={styles.secondaryContainer}>
        <View style={{ marginTop: "10%" }}>
          <Text style={styles.balanceHeading}>Balance</Text>
          <Text style={styles.balanceAmount}>$2,748.00</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable onPress={() => {}} style={{ marginRight: "5%" }}>
            <Text style={styles.outlineButton}>
              <Image source={ClockSvg} style={styles.icon} />
            </Text>
          </Pressable>
          <Pressable onPress={() => {}}>
            <Text style={styles.outlineButton}>
              <Image source={ShareSvg} style={styles.icon} />
            </Text>
          </Pressable>
        </View>
      </View>
      <Modalize
        alwaysOpen={350}
        modalHeight={825}
        withOverlay={false}
        handlePosition="inside"
        ref={modalizeRef}
        modalStyle={{
          borderRadius: 10,
          backgroundColor: "rgba(28, 38, 65, 1)",
          boxShadow: "0px 4px 4px 0px #00000040",
        }}
        handleStyle={{
          width: 55,
          backgroundColor: "#2D3757",
        }}
        onPositionChange={(e) => setShowStaticHeader(e === "top")}
      >
        <View
          style={{
            backgroundColor: "rgba(28, 38, 65, 1)",
            borderRadius: 20,
            border: "1px solid rgba(28, 38, 65, 1)",
          }}
        >
          <TransactionList />
        </View>
      </Modalize>
    </GradientContainer>
  );
};

export default SalaryCard;