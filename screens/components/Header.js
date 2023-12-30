import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import Logo from '../../assets/icons/logo.svg';

import GradientContainer from './GradientContainer';

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: '10.8%',
    },
    headingContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: '4.4%',
        marginRight: '4.3%'
    },
    heading: {
        fontSize: 32,
        fontWeight: 700,
        color: '#FFFFFF'
    },
    logo: {
        width: '36px',
        height: '36px'
    },
});

const Header = ({ heading, showLogo, style }) => {
    return (
        <GradientContainer>
            <View style={{ ...styles.mainContainer, ...style }}>
                <View style={styles.headingContainer}>
                    <Text style={styles.heading}>{heading}</Text>
                    {showLogo ? (
                        <Image
                            source={Logo}
                            style={styles.logo}
                        />
                    ) : null}
                </View>
                {/* <Text style={styles.balanceHeading}>Balance</Text> */}
                {/* <Text style={styles.balanceAmount}>$2,748.00</Text> */}
                {/* 34px from upper container */}
                {/* <View style={{height: "90%"}}> */}
                {/* <CardCarousel /> */}

                {/* </View> */}
                {/* <Image
      source={Card1Img}
      resizeMode='cover'
      style={styles.card}
    /> */}
            </View>
        </GradientContainer>

    );
};

export default Header;