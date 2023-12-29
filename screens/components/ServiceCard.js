import React, { useState } from 'react';
import GradientContainer from './GradientContainer';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import Header from './Header';
import BackArrowIcon from '../../assets/icons/backArrow.svg';
import { useNavigation } from '@react-navigation/native';
import CardFrontImg from '../../assets/images/CardFront.svg';
import CardBackImg from '../../assets/images/CardBack.svg';

const styles = StyleSheet.create({
    mainContainer: {
        marginTop: '10%',
        marginLeft: '4.3%',
        flex: 1
    },
    backArrowIcon: {
        width: 20,
        height: 20
    },
    heading: {
        marginTop: 0
    },
    card: {
        width: 365,
        height: 231,
        marginLeft: '1.5%',
        marginTop: '5%'
    },
    secondaryContainer: {
        width: '100%',
        height: '55%'
    }
});

const ServiceCard = () => {
    const navigation = useNavigation();
    const [isCardPressed, setCardPressed] = useState(false);

    const navigateBack = () => navigation.navigate('Home');

    return (
        <GradientContainer>
            <View style={styles.mainContainer}>
                <Pressable onPress={navigateBack}>
                    <Image source={BackArrowIcon} alt='back' style={styles.backArrowIcon} />
                </Pressable>
                <Header heading={<>Service Card</>} style={styles.heading} />
                <Pressable onPressIn={() => setCardPressed(true)} onPressOut={() => setCardPressed(false)}>
                    <Image
                        source={isCardPressed ? CardBackImg : CardFrontImg}
                        style={styles.card}
                        sharedTransitionTag='tag'
                    />
                </Pressable>
            </View>
            <View style={styles.secondaryContainer}></View>
        </GradientContainer>
    );
}

export default ServiceCard;
