import { Text, TouchableOpacity, View } from 'react-native'
import Book from '../../../library/class/Book'
import BookFavCardStyles from '../../../styles/components/cards/book/BookFavCardStyles';
import TextIconButton from '../../Buttons/TextIconButton';
import { COLORS } from '../../../library/CommonColors';

type Props = {
    book: Book;
    navigation: any;
}

export default function BookFavCard({book, navigation} : Props) {
    
    const onClickBookCard =() => {
        navigation.navigate('BookScreen', { book });
    };

    const onLikedBook = () => {

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