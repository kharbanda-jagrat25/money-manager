import React, { useRef, useState } from 'react';
import { View, StyleSheet, Animated, Pressable, Image, useWindowDimensions } from 'react-native';
import Card1Img from '../../assets/images/Card1.png';
import Card2Img from '../../assets/images/Card2.png';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    flatlistContainer: {
        flex: 1
    },
    item: {
        flex: 1,
        paddingRight: '5%'
    },
    card: {
        width: 280,
        height: 443
    },
    indicatorContainer: {
        width: '100%',
        height: '45%',
        overflow: 'hidden'
    },
    indicatorWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginTop: 10
    },
    normalDot: {
        height: 8,
        width: 8,
        borderRadius: 4,
        marginHorizontal: 4,
    },
});

const data = [
    {
        id: 1,
        title: 'Card 1',
        source: Card1Img
    },
    {
        id: 2,
        title: 'Card 2',
        source: Card2Img
    },
];

const CardCarousel = () => {
    const navigation = useNavigation();
    const flatListRef = useRef(null);
    const { width: windowWidth } = useWindowDimensions();
    const [activeIndex, setActiveIndex] = useState(0);

    const navigateToSalaryCardScreen = () => navigation.navigate('SalaryCard');

    const navigateToRespectiveCard = (index) => flatListRef.current.scrollToIndex({ index, animated: true });

    const onScroll = Animated.event(
        [],
        { useNativeDriver: false, listener: (event) => handleScroll(event) }
    );

    const handleScroll = (event) => {
        const offsetX = event.nativeEvent.contentOffset.x;
        const index = Math.round(offsetX / windowWidth);
        setActiveIndex(index);
    };

    return (
        <View style={styles.mainContainer}>
            <Animated.FlatList
                ref={flatListRef}
                data={data}
                bounces={false}
                horizontal
                style={styles.flatlistContainer}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                keyExtractor={card => card.id}
                renderItem={({ item, index }) => {
                    return (
                        <Pressable onPress={() => navigateToSalaryCardScreen()}>
                            <View style={[ styles.item, index + 1 === data.length ? { marginRight: 50 } : { marginLeft: 20 } ]}>
                                <Image
                                    source={item.source}
                                    style={styles.card}
                                />
                            </View>
                        </Pressable>
                    );
                }}
            />
            <View style={styles.indicatorContainer}>
                <View style={styles.indicatorWrapper}>
                    {data.map((_, cardIndex) => {
                        return (
                            <Pressable key={cardIndex} onPress={() => navigateToRespectiveCard(cardIndex)}>
                                <View
                                    style={[
                                        styles.normalDot,
                                        {
                                            width: activeIndex === cardIndex ? 30 : 20,
                                            backgroundColor: activeIndex === cardIndex ? '#FFF' : '#000',
                                        }
                                    ]}
                                />
                            </Pressable>
                        );
                    })}
                </View>
            </View>
        </View>
    );
};

export default CardCarousel;
