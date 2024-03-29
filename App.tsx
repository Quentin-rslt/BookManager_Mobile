import React, { useMemo } from 'react';
import { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ActivityIndicator, View, Image } from 'react-native';
import NavBar from './src/components/Buttons/NavBar';
import { createStackNavigator } from '@react-navigation/stack';
import AddBookScreen from './src/Screens/Book/AddBookScreen';
import Client from './src/library/class/Client';
import CommonStyles from './src/styles/CommonStyles';
import { COLORS } from './src/library/CommonColors';
import AddTagScreen from './src/Screens/Tag/AddTagScreen';
import EditBookScreen from './src/Screens/Book/EditBookScreen';
import EditTagScreen from './src/Screens/Tag/EditTagScreen';
import BookScreen from './src/Screens/Book/BookScreen';
import TagScreen from './src/Screens/Tag/TagScreen';

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
                <ActivityIndicator style={CommonStyles.firstLoader} size="small" color={COLORS.accentColor}/>
                <Image style={CommonStyles.image} source={require("./assets/splash.png")}/>
            </View>
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="NavBar" component={NavBar} options={{ headerShown: false }} initialParams={{ client }}/>
                <Stack.Screen name="BookScreen" component={BookScreen} options={{ headerShown: false, animationEnabled: false }} initialParams={{ client }}/>
                <Stack.Screen name="AddBookScreen" component={AddBookScreen} options={{ headerShown: false, animationEnabled: false }} initialParams={{ client }}/>
                <Stack.Screen name="EditBookScreen" component={EditBookScreen} options={{ headerShown: false, animationEnabled: false }} initialParams={{ client }}/>
                <Stack.Screen name="TagScreen" component={TagScreen} options={{ headerShown: false, animationEnabled: false }} initialParams={{ client }}/>
                <Stack.Screen name="AddTagScreen" component={AddTagScreen} options={{ headerShown: false, animationEnabled: false }} initialParams={{ client }}/>
                <Stack.Screen name="EditTagScreen" component={EditTagScreen} options={{ headerShown: false, animationEnabled: false }} initialParams={{ client }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
