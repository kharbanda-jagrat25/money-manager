import React, { useState } from 'react';
import { View, StyleSheet, Animated, Pressable, Image } from 'react-native';
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
        width: "100%",
        height: "100%"
    }
    // paginationContainer: {
    //     position: 'absolute',
    //     bottom: 10,
    //     width: '100%',
    //     justifyContent: 'center',
    //     flexDirection: 'row',
    // },
    // paginationDot: {
    //     width: 10,
    //     height: 10,
    //     borderRadius: 5,
    //     backgroundColor: 'blue',
    //     marginHorizontal: 8,
    // },
    // paginationInactiveDot: {
    //     width: 10,
    //     height: 10,
    //     borderRadius: 5,
    //     backgroundColor: 'lightgray',
    //     marginHorizontal: 8,
    // }
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
    const [scrollAnimation] = useState(new Animated.Value(0));
    const navigation = useNavigation();

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

    return (
        <View style={styles.mainContainer}>
            <Animated.FlatList
                data={data}
                bounces={false}
                horizontal
                style={styles.flatlistContainer}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollAnimation } } }], {
                    useNativeDriver: true,
                })}
                renderItem={({ item }) => {
                    console.log('Rendering item:', item);
                    return (
                        <Pressable onPress={() => handleCardRotation()}>
                            <Animated.View
                                style={styles.item}
                            >
                                <Image
                                    source={item.source}
                                    style={{
                                        ...styles.card,
                                        // transform: [
                                        //     {
                                        //         translateX: scrollAnimation.interpolate({
                                        //             inputRange: [width * (index - 1), width * index, width * (index + 1)],
                                        //             outputRange: [-width * 0.8, 0, width * 0.8],
                                        //         }),
                                        //     },
                                        // ]
                                    }}
                                />
                            </Animated.View>
                        </Pressable>
                    );
                }}
            />
            {/* <View>hello</View> */}
        </View>
    );
};

export default CardCarousel;
