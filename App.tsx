import React from 'react';
import LibraryScreen from './src/screens/LibraryScreen';
import TagsScreen from './src/screens/TagsScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { getBooks } from './src/Common/services/BookService';

const Stack = createStackNavigator();

export default function App() {
 

  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Library" component={LibraryScreen}/>
            <Stack.Screen name="Tags" component={TagsScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}

