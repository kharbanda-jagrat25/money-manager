import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Animated, Pressable, FlatList } from 'react-native';
import Card1Img from '../../assets/images/Card1.svg';
import Card2Img from '../../assets/images/Card2.svg';
import ServiceCard from './ServiceCard';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: '10%',
    },
    item: {
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        height: '100%',
        paddingRight: "10% !important",
        marginRight: '10% !important'
    },
    card: {
        // width: '100%',
        height: '100%',
    },
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

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const CardCarousel = () => {
    const [rotation, setRotation] = useState(false);
    const [scrollAnimation] = useState(new Animated.Value(0));
    const navigation = useNavigation();

    const handleCardRotation = () => {
        setRotation(true);
        // Perform slide animation logic here
        Animated.timing(scrollAnimation, {
            toValue: 1,
            duration: 0, // Adjust duration as needed
            useNativeDriver: true,
        }).start(() => {
            // Reset animation value after completion
            scrollAnimation.setValue(0);
            navigation.navigate('ServiceCard');
            setRotation(false);
        });
    }

    const getStyle = (index) => {
        if (rotation) return ({
            ...styles.item,
            transform: [
                { rotate: '90deg' },
                {
                    translateX: scrollAnimation.interpolate({
                        inputRange: [width * (index - 1), width * index, width * (index + 1)],
                        outputRange: [-width * 0.8, 0, width * 0.8],
                    }),
                },
            ]
        });
        // return ({
        //     ...styles.item,
        //     transform: [
        //         {
        //             translateX: scrollAnimation.interpolate({
        //                 inputRange: [width * (index - 1), width * index, width * (index + 1)],
        //                 outputRange: [-width * 0.8, 0, width * 0.8],
        //             }),
        //         },
        //     ]
        // });
    }

    return (
        <View style={styles.container}>
            <>
                <AnimatedFlatList
                    data={data}
                    bounces={false}
                    horizontal
                    style={{ width: "100%", height: "100%" }}
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.id}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollAnimation } } }], {
                        useNativeDriver: true,
                    })}
                    renderItem={({ item, index }) => {
                        return (
                            <Pressable onPress={() => handleCardRotation()}>
                                <Animated.View
                                    style={getStyle(index)}
                                >
                                    <img
                                        src={item.source}
                                        style={{
                                            width: "100%",
                                            height: "100%",
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
            </>
            {rotation && (
                <ServiceCard />
            )}
        </View>
    );
};

export default CardCarousel;
