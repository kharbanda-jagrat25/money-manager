import { LinearGradient } from 'expo-linear-gradient';
import React, { useRef } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Animated, FlatList } from 'react-native';
import Card1Img from '../../assets/images/Card1.svg';
import Card2Img from '../../assets/images/Card2.svg';

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
        paddingRight: "10%",
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

const ParallaxCarousel = () => {
    const scrollAnimation = useRef(new Animated.Value(0)).current;

    return (
        <View style={styles.container}>
            <>
            <Animated.FlatList
                data={data}
                bounces={false}
                horizontal
                style={{ width: "100%", height: "100%" }}
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                keyExtractor={item => item.id}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollAnimation } } }], { useNativeDriver: true })}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.item} >
                            <img src={item.source} style={{
                                width: "100%", height: "100%",

                                transform: [{
                                    translateX: scrollAnimation.interpolate({
                                        inputRange: [width * (index - 1), width * index, width * (index + 1)],
                                        outputRange: [-width * 0.8, 0, width * 0.8]
                                    })
                                }]
                            }} />
                            {/* <Animated.Image
                                style={[styles.card, {
                                    transform: [{
                                        translateX: scrollAnimation.interpolate({
                                            inputRange: [width * (index - 1), width * index, width * (index + 1)],
                                            outputRange: [-width * 0.8, 0, width * 0.8]
                                        })
                                    }]
                                }]}
                                source={item.source} /> */}
                        </View>

                        // <LinearGradient
                        //     colors={['#b473c0', '#88c2f6', '#2367f8']}
                        //     style={styles.gradientContainer}
                        //     start={{ x: 0.5, y: 0 }}
                        //     end={{ x: 0, y: 0 }}
                        // >
                        /* <Animated.Image
                            source={item.source}
                            style={[styles.card, {
                                width: '100%',
                                height: '100%',
                                transform: [{
                                    translateX: scrollAnimation.interpolate({
                                        inputRange: [width * (index - 1), width * index, width * (index + 1)],
                                        outputRange: [-width * 0.8, 0, width * 0.8]
                                    })
                                }]
                            }]}
                        /> */
                        /* <Animated.View style={styles.card}>
                        </Animated.View> */
                        /* </LinearGradient> */
                    )
                }}
            />
            <View>hello</View>
            </>
        </View>
    );

    // const renderItem = ({ item }) => (
    //     <View style={styles.slide}>
    //         <Image source={{ uri: item.imageUrl }} style={styles.image} />
    //         <View style={styles.textContainer}>
    //             <Text style={styles.title}>{item.title}</Text>
    //         </View>
    //     </View>
    // );

    // const renderPagination = () => (
    //     <Pagination
    //         dotsLength={data.length}
    //         activeDotIndex={activeSlide}
    //         dotStyle={styles.paginationDot}
    //         inactiveDotStyle={styles.paginationInactiveDot}
    //         containerStyle={styles.paginationContainer}
    //     />
    // );

    // const [activeSlide, setActiveSlide] = React.useState(0);

    // return (
    //     // <ParallaxScrollView
    //     //     style={{ flex: 1, backgroundColor: 'white' }}
    //     //     renderBackground={() => (
    //     //         <Carousel
    //     //             data={data}
    //     //             renderItem={renderItem}
    //     //             sliderWidth={width}
    //     //             itemWidth={width}
    //     //             onSnapToItem={(index) => setActiveSlide(index)}
    //     //         />
    //     //     )}
    //     //     parallaxHeaderHeight={200}
    //     // >
    //     //     {renderPagination()}
    //     // </ParallaxScrollView>
    //     <View>
    //         <Text>Hello</Text>
    //         <Image
    //             source={require('../../assets/images/Card1.svg')}
    //             style={styles.card}
    //         />
    //     </View>
    // );
};

export default ParallaxCarousel;
