import { TextInput, View } from 'react-native'
import SearchBarStyles from '../styles/components/SearchBarStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Book from '../Common/types/book';
import { useState } from 'react';
import { getBooksBytextSearch } from '../Common/services/BookService';
import { COLORS } from '../Common/CommonColors';

type Props = {
    books: Book[];
}

export default function SearchBar({books} : Props) {
    const [newBooks, setNewBooks] = useState<Book[]>(books);
    const [text, setText] = useState('');

    function onClickSearch() {
        books = getBooksBytextSearch(text)
    }

    return (
        <View style={SearchBarStyles.container}>
            <TextInput placeholder="Search" style={SearchBarStyles.textInput} onChangeText={newText => setText(newText)}/>
            <TouchableHighlight onPress={() => onClickSearch} underlayColor={COLORS.background}>
                <MaterialCommunityIcons name={'card-search'} size={40} color="#c58282e5"/>
            </TouchableHighlight>
        </View>
  )
}

