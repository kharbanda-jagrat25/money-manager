import React, { useState } from 'react';
import { View, StyleSheet, Animated, Pressable, Image, useWindowDimensions } from 'react-native';
import Card1Img from '../../assets/images/Card1.svg';
import Card2Img from '../../assets/images/Card2.svg';
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
        width: 300,
        height: 473,
        marginRight: 20
    },
    indicatorContainer: {
        width: '100%',
        height: '45%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    normalDot: {
        position: 'absolute',
        top: 0,
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
    const { width: windowWidth } = useWindowDimensions();
    const [scrollAnimation] = useState(new Animated.Value(0));
    const [activeIndex, setActiveIndex] = useState(0);

    const handleCardRotation = () => {
        Animated.timing(scrollAnimation, {
            toValue: 1,
            duration: 0,
            useNativeDriver: true,
        }).start(() => {
            // Reset animation values after completion
            scrollAnimation.setValue(0);
            navigation.navigate('ServiceCard');
        });
    }

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
                data={data}
                bounces={false}
                horizontal
                style={styles.flatlistContainer}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onScroll={onScroll}
                scrollEventThrottle={1}
                keyExtractor={card => card.id}
                renderItem={({ item }) => {
                    return (
                        <Pressable onPress={() => handleCardRotation()}>
                            <Animated.View
                                style={styles.item}
                            >
                                <Image
                                    source={item.source}
                                    style={styles.card}
                                    sharedTransitionTag='tag'
                                />
                            </Animated.View>
                        </Pressable>
                    );
                }}
            />
            <View style={styles.indicatorContainer}>
                {data.map((card, cardIndex) => {
                    return (
                        <Animated.View
                            key={cardIndex}
                            style={[
                                styles.normalDot,
                                { width: activeIndex === cardIndex ? 30 : 20 },
                                {backgroundColor: activeIndex === cardIndex ? '#FFF' : '#000'},
                                { marginRight: cardIndex + 1 !== data.length ? 60 : 0 }
                            ]}
                        />
                    );
                })}
            </View>
        </View>
    );
};

export default CardCarousel;
