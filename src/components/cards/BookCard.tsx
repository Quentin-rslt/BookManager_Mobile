import { Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Book from '../../Common/Class/Book'
import BookCardStyles from '../../styles/components/Cards/BookCardStyles';
import TagSticker from '../Buttons/TagSticker';
import NumberIcon from '../NumberIcon';
import { ScrollView } from 'react-native-gesture-handler';
import BookModal from '../Modals/BookModal';

type Props = {
    book: Book;
    onRefresh: () => Promise<void>;
}

export default function BookCard({book, onRefresh} : Props) {

    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <View>
            <TouchableOpacity style={BookCardStyles.container} onPress={() => setShowModal(true)}>
                <View>
                    <Text style={BookCardStyles.titleStyle} numberOfLines={1}>{book.title}</Text>
                    <View style={BookCardStyles.containerReleaseAuthor}>
                        <Text style={BookCardStyles.authorStyle} numberOfLines={1}>{book.author}</Text>
                        <Text style={BookCardStyles.releaseYear}>{book.releaseYear}</Text>
                    </View>
                </View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}  style={BookCardStyles.tagList}>
                    {
                        book.tags.map((tag, idTag) =>
                            <View key={idTag}>   
                                <TagSticker tag={tag}/>
                            </View>
                        )
                    }
                </ScrollView>
                <View style={BookCardStyles.numberContainer}>
                    <NumberIcon iconNumber={book.readings.length} iconName={"eye-outline"}/>
                    <NumberIcon iconNumber={book.numberOP} iconName={"book-open-page-variant-outline"}/>
                    <NumberIcon iconNumber={book.notePerso} iconName={"star"}/>
                </View>
            </TouchableOpacity>
            <BookModal book={book} showModal={showModal} setShowModal={setShowModal} onRefresh={onRefresh}/>
        </View>
    )
}