import { Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import Book from '../../../library/class/Book'
import BookCardStyles from '../../../styles/components/cards/book/BookCardStyles';
import TagSticker from '../../Buttons/TagSticker';
import { ScrollView } from 'react-native-gesture-handler';
import TextIconButton from '../../Buttons/TextIconButton';
import { COLORS } from '../../../library/CommonColors';
import BookBuilder from '../../../library/builders/BookBuilder';

type Props = {
    book: Book;
    navigation: any;
    onRefresh?: () => void
}

export default function BookCard({book, navigation, onRefresh} : Props) {
    
    const onClickBookCard =() => {
        navigation.navigate('BookScreen', { book });
    };
    
    const onLikedBook = async () => {
        const bookBuilder:BookBuilder = new BookBuilder(book.client, book.toJSON());
        bookBuilder.setIsFav(!book.isFav);

        try {
            await book.client.bookService.favBook(bookBuilder);

            onRefresh && onRefresh();
        } catch(error) {
            ToastAndroid.show("Problème lors du like du livres" , ToastAndroid.CENTER);
        }
    };

    return (
        <View>
            <TouchableOpacity style={BookCardStyles.container} onPress={onClickBookCard}>
                <View>
                    <View style={BookCardStyles.lineContainer}>
                        <Text style={BookCardStyles.titleStyle} numberOfLines={1}>{book.title}</Text>
                        {
                            book.isFav ?
                            <TextIconButton callBack={onLikedBook} showText={false} iconName={'cards-heart'} iconSize={25} iconColor={COLORS.accentColor}/>
                            :  
                            <TextIconButton callBack={onLikedBook} showText={false} iconName={'cards-heart-outline'} iconSize={25} iconColor={COLORS.accentColor}/>
                        }
                    </View>
                    <View style={BookCardStyles.lineContainer}>
                        <Text style={BookCardStyles.authorStyle} numberOfLines={1}>{book.author}</Text>
                        <Text style={BookCardStyles.releaseYear}>{book.releaseYear}</Text>
                    </View>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}  style={BookCardStyles.tagList}>
                    {
                        book.getTags().map((tag, idTag) =>
                            <View key={idTag}>   
                                <TagSticker key={idTag} tag={tag} navigation={navigation}/>
                            </View>
                        )
                    }
                </ScrollView>
            </TouchableOpacity>
        </View>
    )
}