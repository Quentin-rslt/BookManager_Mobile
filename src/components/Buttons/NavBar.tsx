import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavBarStyles from '../../styles/components/Buttons/NavBarStyles';
import { COLORS } from '../../library/CommonColors';
import LibraryScreen from '../../Screens/Book/LibraryScreen';
import TagsScreen from '../../Screens/Tag/TagsScreen';
import HomeScreen from '../../Screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function NavBar({ route } : any) {

    const client = route.params.client;

    return (
        
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                tabBarInactiveTintColor: COLORS.foregroundHolder,
                tabBarActiveTintColor: COLORS.accentColor,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: NavBarStyles.container,     
            }} 
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home-variant" color={color} size={35}/>
                    ),
                }}
                initialParams={{client}}
            />
            <Tab.Screen
                name="Library"
                component={LibraryScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bookshelf" color={color} size={35}/>
                    ),
                }}
                initialParams={{client}}
            />
            <Tab.Screen
                name="Tags"
                component={TagsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="tag-multiple" color={color} size={35}/>
                    ),
                }}
                initialParams={{client}}
            />
        </Tab.Navigator>
    )
}