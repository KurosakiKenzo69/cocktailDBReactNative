import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './Homescreen.js';
import DetailScreen from './DetailScreen.js';
import FavoritesScreen from './FavoritesScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="DetailScreen" component={DetailScreen} />
        </Stack.Navigator>
    );
};

const BottomNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Accueil') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Favoris') {
                        iconName = focused ? 'heart' : 'heart-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Accueil" component={HomeStack} />
            <Tab.Screen name="Favoris" component={FavoritesScreen} />
        </Tab.Navigator>
    );
};

export default BottomNavigation;
