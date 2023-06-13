import { Text, TouchableOpacity, View } from 'react-native'
import Book from '../../../library/class/Book'
import BookRecentListenCardStyles from '../../../styles/components/cards/book/BookRecentListenCardStyles';

type Props = {
    book: Book;
    navigation: any;
}

export default function BookRecentListenCard({book, navigation} : Props) {
    
    const onClickBookCard =() => {
        navigation.navigate('BookScreen', { book });
    };

    return (
        <View>
            <TouchableOpacity style={BookRecentListenCardStyles.container} onPress={onClickBookCard}>
                <Text style={BookRecentListenCardStyles.titleStyle} numberOfLines={1}>{book.title}</Text>
                <Text style={BookRecentListenCardStyles.authorStyle} numberOfLines={1}>{book.author}</Text>
            </TouchableOpacity>
        </View>
    )
}