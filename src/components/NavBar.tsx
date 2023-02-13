import React from 'react'
import { TouchableHighlight, View, Text } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NavBarStyles from '../styles/components/NavBarStyles';

type NavBarStackParamList = {
    Library : undefined;
    Tags : undefined;
}

type Props = {
    libraryFocus : boolean;
    tagsFocus : boolean;
}

export default function NavBar({libraryFocus, tagsFocus} : Props) {
    const nav = useNavigation<StackNavigationProp<NavBarStackParamList>>();

    const onClickLibraryButton = () => {
        nav.navigate('Library');
    }

    const onClickTagsButton = () => {
        nav.navigate('Tags');
    }

    return (
        <View style={NavBarStyles.container}>
            <TouchableHighlight onPress={onClickLibraryButton} underlayColor={"#262222"}>
                {
                    !libraryFocus? <MaterialCommunityIcons name="bookshelf" size={35} color="#c58282e5"/> : <MaterialCommunityIcons name="bookshelf" size={35} color="#c54c4ce5"/>
                }
            </TouchableHighlight>
            <TouchableHighlight onPress={onClickTagsButton} underlayColor={"#262222"}>
                {
                    !tagsFocus? <MaterialCommunityIcons name="tag-multiple" size={35} color="#c58282e5"/> : <MaterialCommunityIcons name="tag-multiple" size={35} color="#c54c4ce5"/>
                }
            </TouchableHighlight>
        </View>
    )
}