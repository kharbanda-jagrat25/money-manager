import React, { useRef, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";

import GradientContainer from "./GradientContainer";
import Header from "./Header";
import TransactionList from "./TransactionList";

import BackArrowIcon from "../../assets/icons/backArrow.png";
import CardFrontImg from "../../assets/images/CardFront.png";
import CardBackImg from "../../assets/images/CardBack.png";
import ClockIcon from "../../assets/icons/clock.png";
import ShareIcon from "../../assets/icons/share.png";

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 40,
        marginLeft: 20,
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
        width: 352,
        height: 222
    },
    secondaryContainer: {
        marginLeft: 20,
        marginTop: "25%",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    balanceHeading: {
        fontSize: 16,
        fontWeight: "700",
        color: "rgba(148, 163, 211, 1)",
        marginTop: "5%",
    },
    balanceAmount: {
        fontSize: 26,
        fontWeight: "700",
        color: "#FFFFFF",
    },
    icon: {
        width: 54,
        height: 54,
        marginRight: 20
    },
    buttonContainer: {
        flexDirection: "row",
        flex: 1,
        marginTop: 42,
        justifyContent: "flex-end",
    },
});

const SalaryCard = () => {
    const route = useRoute();
    const modalizeRef = useRef(null);
    const navigation = useNavigation();
    const [isCardPressed, setCardPressed] = useState(false);
    const [showStaticHeader, setShowStaticHeader] = useState(false);

    const navigateBack = () => navigation.navigate("Home");

    return (
        <GradientContainer styles={{ overflow: "hidden" }}>
            <View style={styles.mainContainer}>
                <View style={{
                    flexDirection: "row",
                    marginTop: "10%"
                }}>
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
                                alignItems: "center",
                                justifyContent: "center",
                                display: "flex",
                                fontSize: 17,
                                fontWeight: "900",
                                color: "white",
                            }}
                        >
                            <Text style={{
                                textAlign: "center",
                            }}>Salary Card</Text>
                        </Text>
                    ) : null}
                </View>
                <View style={{ marginBottom: "3%", opacity: showStaticHeader ? 0 : 1 }}>
                    <Header
                        heading="Salary Card"
                        style={styles.heading}
                    />
                </View>
                <Pressable
                    onPressIn={() => setCardPressed(true)}
                    onPressOut={() => setCardPressed(false)}
                >
                    <Image
                        source={isCardPressed ? CardBackImg : CardFrontImg}
                        style={styles.card}
                    />
                </Pressable>
            </View>
            <View style={styles.secondaryContainer}>
                <View style={{ marginTop: "10%" }}>
                    <Text style={styles.balanceHeading}>Balance</Text>
                    <Text style={styles.balanceAmount}>$2,748.00</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Image source={ClockIcon} style={styles.icon} />
                    <Image source={ShareIcon} style={styles.icon} />
                </View>
            </View>
            <GestureHandlerRootView style={{ flex: 1 }}>
                <Modalize
                    alwaysOpen={350}
                    modalHeight={705}
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
                            borderWidth: 1,
                            borderColor: "rgba(28, 38, 65, 1)",
                        }}
                    >
                        <TransactionList
                            fromSalaryCard
                            updateShowDetails={route.params?.showDetails}
                        />
                    </View>
                </Modalize>
            </GestureHandlerRootView>
        </GradientContainer>
    );
};

export default SalaryCard;