import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavBarStyles from '../../styles/components/Buttons/NavBarStyles';
import LibraryScreen from '../../screens/LibraryScreen';
import TagsScreen from '../../screens/TagsScreen';
import { COLORS } from '../../Common/CommonColors';

const Tab = createBottomTabNavigator();

export default function NavBar() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            screenOptions={{
                tabBarActiveBackgroundColor: COLORS.background,
                tabBarInactiveBackgroundColor: COLORS.background,
                tabBarInactiveTintColor: COLORS.foreground,
                tabBarActiveTintColor: COLORS.accentColor,
                tabBarLabel: '',
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
            />
            <Tab.Screen
                name="Tags"
                component={TagsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="tag-multiple" color={color} size={40} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}