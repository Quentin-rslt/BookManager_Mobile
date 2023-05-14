import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavBarStyles from '../../styles/components/Buttons/NavBarStyles';
import LibraryScreen from '../../Screens/LibraryScreen';
import TagsScreen from '../../Screens/TagsScreen';
import { COLORS } from '../../Common/CommonColors';

const Tab = createBottomTabNavigator();

export default function NavBar({ route } : any) {

    const client = route.params.client;

    return (
        <Tab.Navigator
            initialRouteName="Library"
            screenOptions={{
                tabBarInactiveTintColor: COLORS.clickableColor,
                tabBarActiveTintColor: COLORS.accentColor,
                tabBarShowLabel: false,
                tabBarHideOnKeyboard: true,
                headerShown: false,
                tabBarStyle: NavBarStyles.container,     
            }} 
        >
            <Tab.Screen
                name="Library"
                component={LibraryScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bookshelf" color={color} size={40}/>
                    ),
                }}
                initialParams={{client}}
            />
            <Tab.Screen
                name="Tags"
                component={TagsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="tag-multiple" color={color} size={40}/>
                    ),
                }}
                initialParams={{client}}
            />
        </Tab.Navigator>
    )
}