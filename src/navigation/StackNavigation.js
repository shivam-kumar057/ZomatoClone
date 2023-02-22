import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
            screenOptions={{
                headerShown : false
              }}
             
              
            >
                <Stack.Screen
                 name="TabNavigator" component={TabNavigation} />
            </Stack.Navigator>
            </NavigationContainer>
    )
}

export default StackNavigation