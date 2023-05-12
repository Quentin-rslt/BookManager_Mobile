import React, { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View } from 'react-native';
import NavBar from './src/components/Buttons/NavBar';
import { createStackNavigator } from '@react-navigation/stack';
import AddBookScreen from './src/screens/AddBookScreen';
import Client from './src/Common/Class/Client';
import CommonStyles from './src/styles/CommonStyles';
import { COLORS } from './src/Common/CommonColors';

const Stack = createStackNavigator();

export default function App() {

    const client = useMemo(() => new Client(), []);
    
    const [ isLoad, setIsLoad ] = useState<boolean>(false);

    const loadClient = async () => {
        await client.fetchAll();
        
        setIsLoad(true);
    }

    useEffect(() => {
        loadClient();
    }, []);

    
    if(!isLoad) {
        return (
            <View style={CommonStyles.container}>
                <ActivityIndicator style={CommonStyles.firstLoader} size="large" color={COLORS.accentColor}/>
            </View>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="NavBar" component={NavBar} options={{ headerShown: false }} initialParams={{ client }}/>
                <Stack.Screen name="AddBookScreen" component={AddBookScreen} options={{ headerShown: false, animationEnabled: false }} initialParams={{ client }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
