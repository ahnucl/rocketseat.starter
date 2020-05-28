/**
 * Trechos comentados para usar o React Navigation 5
 */ 

// import { createStackNavigator } from '@react-navigation/stack';
// import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/main';
import Product from './pages/product';

/* const Stack = createStackNavigator();

export default () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Main" component={Main} />
        </Stack.Navigator>
    );
}
 */

const MyStack = createStackNavigator({
     Main,
     Product
 }, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#DA552F"
        },
        headerTintColor: "#FFF"
    },
 });

export default createAppContainer(MyStack);