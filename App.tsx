import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import NavBar from './src/components/Buttons/NavBar';
import { createStackNavigator } from '@react-navigation/stack';
import AddBookScreen from './src/screens/AddBookScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="NavBar" component={NavBar} options={{ headerShown: false }}/>
                <Stack.Screen name="AddBookScreen" component={AddBookScreen} options={{ headerShown: false, animationEnabled: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}