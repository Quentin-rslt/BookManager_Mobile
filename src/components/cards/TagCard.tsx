import { Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import NumberIcon from './../NumberIcon';
import TagCardStyles from '../../styles/components/cards/TagCardStyles';
import { useCallback, useEffect, useState } from 'react';
import Tag from '../../Common/Class/Tag';
import BookService from '../../Common/services/BookService';

type Props = {
    tag: Tag;
    navigation: any;
}

export default function TagCard({tag, navigation} : Props) {
    
    const bookService:BookService = new BookService();

    const [numberBook, setNumberBook] = useState<number>(0);

    useEffect(() => {
        onRefresh();
    }, [navigation])

    const onRefresh = useCallback(async () => {
        try{
            await bookService.fetchBooksByTag(tag);
            setNumberBook(bookService.books.length)
        } catch(error) {
            ToastAndroid.show("Problème lors du chargement du nombre de livre" , ToastAndroid.CENTER);
        }
    }, []);

    const onClickTagCard = () => {
        alert(tag.textTag)
    }

    return (
        <TouchableOpacity style={TagCardStyles.container} onPress={onClickTagCard}>
            <Text style={TagCardStyles.text} numberOfLines={1}>{tag.textTag}</Text>
            <View style={TagCardStyles.numberBook}>
                <NumberIcon number={numberBook} nameIcon={"book-open-outline"} />
            </View>
        </TouchableOpacity>
    )
}