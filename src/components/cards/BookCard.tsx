import { Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Book from '../../Common/Class/Book'
import BookCardStyles from '../../styles/components/cards/BookCardStyles';
import TagSticker from '../TagSticker';
import NumberIcon from '../NumberIcon';

type Props = {
    book: Book;
}

export default function BookCard({book} : Props) {
    const onClickBookCard = () => {
        alert(book.title);
    }

    return (
        <TouchableOpacity style={BookCardStyles.container} onPress={onClickBookCard}>
            <View>
                <Text style={BookCardStyles.titleStyle} numberOfLines={1}>{book.title}</Text>
                <View style={BookCardStyles.containerReleaseAuthor}>
                    <Text style={BookCardStyles.authorStyle} numberOfLines={1}>{book.author}</Text>
                    <Text style={BookCardStyles.releaseYear}>{book.releaseYear}</Text>
                </View>
            </View>
            <View style={BookCardStyles.tagList}>
                {
                    book.tags.map((tag, idTag) =>
                        <View key={idTag}>   
                            <TagSticker text={tag.textTag}/>
                        </View>
                    )
                }
            </View>
            <View style={BookCardStyles.numberContainer}>
                <NumberIcon number={book.readings.length} nameIcon={"eye-outline"}/>
                <NumberIcon number={book.numberOP} nameIcon={"book-open-page-variant-outline"}/>
                <NumberIcon number={book.notePerso} nameIcon={"star"}/>
            </View>
        </TouchableOpacity>
    )
}