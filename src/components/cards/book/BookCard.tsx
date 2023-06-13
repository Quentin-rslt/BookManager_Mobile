import { Text, TouchableOpacity, View } from 'react-native'
import Book from '../../../library/class/Book'
import BookCardStyles from '../../../styles/components/cards/book/BookCardStyles';
import TagSticker from '../../Buttons/TagSticker';
import NumberIcon from '../../NumberIcon';
import { ScrollView } from 'react-native-gesture-handler';

type Props = {
    book: Book;
    navigation: any;
}

export default function BookCard({book, navigation} : Props) {
    
    const onClickBookCard =() => {
        navigation.navigate('BookScreen', { book });
    };

    return (
        <View>
            <TouchableOpacity style={BookCardStyles.container} onPress={onClickBookCard}>
                <View>
                    <Text style={BookCardStyles.titleStyle} numberOfLines={1}>{book.title}</Text>
                    <View style={BookCardStyles.containerReleaseAuthor}>
                        <Text style={BookCardStyles.authorStyle} numberOfLines={1}>{book.author}</Text>
                        <Text style={BookCardStyles.releaseYear}>{book.releaseYear}</Text>
                    </View>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}  style={BookCardStyles.tagList}>
                    {
                        Array.from(book.tags.values()).map((tag, idTag) =>
                            <View key={idTag}>   
                                <TagSticker tag={tag} navigation={navigation}/>
                            </View>
                        )
                    }
                </ScrollView>
                <View style={BookCardStyles.numberContainer}>
                    <NumberIcon iconNumber={book.readings.size} iconName={"eye-outline"}/>
                    <NumberIcon iconNumber={book.numberOP} iconName={"book-open-page-variant-outline"}/>
                    <NumberIcon iconNumber={book.notePerso} iconName={"star"}/>
                </View>
            </TouchableOpacity>
        </View>
    )
}