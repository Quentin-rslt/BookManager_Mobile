import { TextInput, View } from 'react-native'
import SearchBarStyles from '../../styles/components/Inputs/SearchBarStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Book from '../../Common/types/book';
import { useState } from 'react';
import { COLORS } from '../../Common/CommonColors';
import Tag from '../../Common/types/tag';

type Props = {
    onChangeSearch: (text: string) => void;
}

export default function SearchBar({onChangeSearch} : Props) {
    return (
        <View style={SearchBarStyles.container}>
            <TextInput placeholder="Search" style={SearchBarStyles.textInput} onChangeText={onChangeSearch}/>
        </View>
  )
}

