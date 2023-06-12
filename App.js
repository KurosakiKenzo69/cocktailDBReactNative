import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

import BottomNavigation from './components/BottomNavigation.js';
const App = () => {
    return (
        <NavigationContainer>
            <BottomNavigation />
        </NavigationContainer>
    );
};

export default App;
