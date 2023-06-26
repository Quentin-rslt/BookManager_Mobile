import { Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import Book from '../../../library/class/Book'
import BookFavCardStyles from '../../../styles/components/cards/book/BookFavCardStyles';
import TextIconButton from '../../Buttons/TextIconButton';
import { COLORS } from '../../../library/CommonColors';
import BookBuilder from '../../../library/builders/BookBuilder';

type Props = {
    book: Book;
    navigation: any;
    setFavBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

export default function BookFavCard({book, navigation, setFavBooks} : Props) {
    
    const onClickBookCard =() => {
        navigation.navigate('BookScreen', { book });
    };

    const onLikedBook = async () => {
        const bookBuilder:BookBuilder = new BookBuilder(book.client, book.toJSON());
        bookBuilder.setIsFav(!book.isFav);
        try {
            await book.client.bookService.favBook(bookBuilder);
        
            setFavBooks(book.client.bookService.getFavBooks())
        } catch(error) {
            ToastAndroid.show("Problème lors du like du livres" , ToastAndroid.CENTER);
        }
    };

    return (
        <View>
            <TouchableOpacity style={BookFavCardStyles.container} onPress={onClickBookCard}>
                <Text style={BookFavCardStyles.titleStyle} numberOfLines={1}>{book.title}</Text>
                <Text style={BookFavCardStyles.authorStyle} numberOfLines={1}>{book.author}</Text>
                <View style={BookFavCardStyles.likeReleaseContainer}>
                    <TextIconButton callBack={onLikedBook} showText={false} iconName={'cards-heart'} iconSize={25} iconColor={COLORS.accentColor}/>
                    <Text style={BookFavCardStyles.releaseYear}>{book.releaseYear}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}