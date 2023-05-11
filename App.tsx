import React from 'react';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, Image, View } from 'react-native';
import NavBar from './src/components/Buttons/NavBar';
import { createStackNavigator } from '@react-navigation/stack';
import AddBookScreen from './src/screens/AddBookScreen';
import Client from './src/Common/Class/Client';

const Stack = createStackNavigator();

export default function App() {

    const client = new Client();
    
    const [ isLoad, setIsLoad ] = useState<boolean>(false);

    if(!isLoad) {
        return (
            <View style={CommonStyles.container}>
                <ActivityIndicator style={CommonStyles.firstLoader} size="large" color={COLORS.LightBackgroundColor}/>
                <Image style={CommonStyles.image} source={require("./src/assets/splash.png")}/>
            </View>
        )
    }

    useEffect(() => {
        await client.fetch();

        setIsLoad(true);
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="NavBar" component={NavBar} options={{ headerShown: false }} initialParams={{ client }}/>
                <Stack.Screen name="AddBookScreen" component={AddBookScreen} options={{ headerShown: false, animationEnabled: false }} initialParams={{ client }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
