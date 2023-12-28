import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import Home from './screens/Home';
import Catalogue from './screens/Catalogue';
import History from './screens/History';

import HomeIcon from "./assets/icons/home.svg";
import MenuIcon from "./assets/icons/menu.svg";
import CatalogIcon from "./assets/icons/catalog.svg";
import HistoryIcon from "./assets/icons/history.svg";
import ServiceCard from './screens/components/ServiceCard';

const Stack = createNativeStackNavigator();
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
    unclickableContainer: {
        marginTop: 11,
        pointerEvents: 'none'
    }
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
);

const UnclickableTabButton = ({ tab }) => (
    <Pressable onPress={() => {}} style={{ opacity: 0.4 }}>
        <View style={styles.unclickableContainer}>
            <img src={tab.icon} alt={tab.name} />
        </View>
    </Pressable>
);

function HomeTabs() {
    const tabs = [
        {
            name: "Home",
            icon: HomeIcon,
            component: Home,
        },
        {
            name: "Catalogue",
            icon: CatalogIcon,
            component: Catalogue
        },
        {
            name: "History",
            icon: HistoryIcon,
            component: History
        },
        {
            name: "Menu",
            icon: MenuIcon
        }
    ];

    return (
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
                },
                headerShown: false
            }}
        >
            {tabs.map(tab => {
                if (tab.component) return (
                    <Tab.Screen
                        key={tab.name}
                        name={tab.name}
                        component={tab.component}
                        options={{ tabBarIcon: ({ focused }) => <TabIcon focused={focused} icon={tab.icon} alt={tab.name} /> }}
                    />
                );
                return (
                    <Tab.Screen
                        key={tab.name}
                        name={tab.name}
                        component={() => { }}
                        options={{ tabBarButton: props => <UnclickableTabButton tab={tab} {...props} /> }}
                    />
                );
            })}
        </Tab.Navigator>
    );
}

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen
                    name="HomeTabs"
                    component={HomeTabs}
                />
                <Stack.Screen
                    name="ServiceCard"
                    component={ServiceCard}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;