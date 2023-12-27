import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Home from './screens/Home';
import Catalogue from './screens/Catalogue';
import History from './screens/History';

import HomeIcon from "./assets/icons/home.svg";
import MenuIcon from "./assets/icons/menu.svg";
import CatalogIcon from "./assets/icons/catalog.svg";
import HistoryIcon from "./assets/icons/history.svg";

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
    individualTabWrapper: {
        backgroundImage: "none",
        height: "58px",
        width: "58px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    activeIndividualTabWrapper: {
        borderRadius: "50%",
        boxShadow: "0px 4px 4px 0px #00000040",
    },
    activeTabIcon: {
        filter: "brightness(0) invert(1)",
        width: "35%",
        height: "35%",
    },
});

const TabIcon = ({ focused, icon, alt }) => (
    focused ? (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["rgba(93, 158, 255, 1)", "rgba(119, 81, 253, 1)"]}
            style={{
                ...styles.individualTabWrapper,
                ...styles.activeIndividualTabWrapper,
            }}
        >
            <img style={styles.activeTabIcon} src={icon} alt={alt} />
        </LinearGradient>) : <img src={icon} alt={alt} />




)

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                unmountInactiveScreens={true}
                screenOptions={{
                    tabBarBackground: () => (
                        <LinearGradient
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 0 }}
                            style={{ height: "100%", borderTopLeftRadius: "40px", borderTopEndRadius: "40px", boxShadow: "0px 4px 4px 0px #00000040", }}
                            colors={["rgba(19, 27, 49, 0.92)", " rgba(47, 57, 91, 0.92)"]}
                        />
                    ),
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        // backgroundColor: "linear-gradient(8.66deg, rgba(19, 27, 49, 0.92) 21.76%, rgba(47, 57, 91, 0.92) 97.66%)",
                        // borderTopLeftRadius: "30px",
                        // borderTopRightRadius: "30px",
                        height: "80px",
                        border: "none",
                        position: 'absolute',
                        bottom: 0,
                    },
                    tabBarItemStyle: {
                        // backgroundColor: "linear-gradient(8.66deg, rgba(19, 27, 49, 0.92) 21.76%, rgba(47, 57, 91, 0.92) 97.66%)",
                    }


                }}>
                <Tab.Screen name="Home" component={Home} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={HomeIcon} alt="Home" />,
                }} />
                <Tab.Screen name="Catalogue" component={Catalogue} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={CatalogIcon} alt="Catalog" />,
                }} />
                <Tab.Screen name="History" component={History} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={HistoryIcon} alt="History" />,
                }} />
                <Tab.Screen name="Menu" component={History} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={MenuIcon} alt="Menu" />,
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;