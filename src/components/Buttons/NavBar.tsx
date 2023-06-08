import React from 'react'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NavBarStyles from '../../styles/components/Buttons/NavBarStyles';
import { COLORS } from '../../library/CommonColors';
import LibraryScreen from '../../Screens/Book/LibraryScreen';
import TagsScreen from '../../Screens/Tag/TagsScreen';
import StatsScreen from '../../Screens/StatsScreen';

const Tab = createBottomTabNavigator();

export default function NavBar({ route } : any) {

    const client = route.params.client;

    return (
        <Tab.Navigator
            initialRouteName="Library"
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
            <Tab.Screen
                name="Stats"
                component={StatsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="ios-stats-chart" color={color} size={33}/>
                    ),
                }}
                initialParams={{client}}
            />
        </Tab.Navigator>
    )
}