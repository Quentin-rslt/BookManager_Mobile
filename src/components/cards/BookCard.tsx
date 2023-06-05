import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Book from '../../library/class/Book'
import BookCardStyles from '../../styles/components/cards/BookCardStyles';
import TagSticker from '../Buttons/TagSticker';
import NumberIcon from '../NumberIcon';
import { ScrollView } from 'react-native-gesture-handler';
import BookModal from '../Modals/BookModal';

type Props = {
    book: Book;
    onRefresh: () => Promise<void> | void;
    navigation: any;
}

export default function BookCard({book, onRefresh, navigation} : Props) {
    const [showModalBook, setShowModalBook] = useState<boolean>(false);

    const onClickBookCard =() => {
        setShowModalBook(true);
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
                                <TagSticker tag={tag} onRefresh={onRefresh} navigation={navigation}/>
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
            <BookModal book={book} showModalBook={showModalBook} setShowModalBook={setShowModalBook} onRefresh={onRefresh} navigation={navigation}/>
        </View>
    )
}