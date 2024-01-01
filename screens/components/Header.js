import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import Logo from "../../assets/icons/logo.png";

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: 70,
    },
    headingContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        marginTop: "4.4%",
        marginRight: "4.3%"
    },
    heading: {
        fontSize: 32,
        fontWeight: "900",
        color: "#FFFFFF"
    },
    logo: {
        width: 36,
        height: 36
    },
});

const Header = ({ heading, showLogo, style }) => {
    return (
        <View style={{ ...styles.mainContainer, ...style }}>
            <View style={styles.headingContainer}>
                <Text style={styles.heading}>{heading}</Text>
                {showLogo ? (
                    <Image
                        source={Logo}
                        style={styles.logo}
                        resizeMode="cover"
                    />
                ) : null}
            </View>
        </View>
    );
};

export default Header;