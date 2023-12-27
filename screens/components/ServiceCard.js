import React, { useState } from 'react';
import GradientContainer from './GradientContainer';
import { Pressable, StyleSheet, View } from 'react-native';
import Header from './Header';
import BackArrowIcon from '../../assets/icons/backArrow.svg';
import { useNavigation } from '@react-navigation/native';
import CardFrontImg from '../../assets/images/CardFront.svg';
import CardBackImg from '../../assets/images/CardBack.svg';

const styles = StyleSheet.create({
    container: {
        marginLeft: '4.3%',
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // transform: [{ rotate: '90deg' }],
    },
    backArrowIcon: {
        width: 20,
        height: 20
    },
    card: {
        width: '92%',
        height: '92%',
        marginLeft: '1.5%',
        marginTop: '5%'
    }
});

const ServiceCard = () => {
    const navigation = useNavigation();
    const [isCardPressed, setCardPressed] = useState(false);

    const navigateBack = () => navigation.navigate('Home');

    return (
        <GradientContainer>
            <View style={styles.container}>
                <Pressable onPress={navigateBack}>
                    <img src={BackArrowIcon} alt='back' style={styles.backArrowIcon} />
                </Pressable>
                <Header heading={<>Service <br />Card</>} />
                <Pressable onPressIn={() => setCardPressed(true)} onPressOut={() => setCardPressed(false)}>
                    <img
                        src={isCardPressed ? CardBackImg : CardFrontImg}
                        style={styles.card}
                    />
                </Pressable>
            </View>
        </GradientContainer>
    );
}

export default ServiceCard;
