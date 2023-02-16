import { Text, View } from 'react-native'
import React from 'react'
import Book from '../Common/types/book'
import BookCardStyles from '../styles/components/BookCardStyles';
import TagSticker from './TagSticker';
import NumberIcon from './NumberIcon';

type Props = {
    book: Book;
}

export default function BookCard({book} : Props) {
    return (
        <View style={BookCardStyles.container}>
            <View>
                <Text style={BookCardStyles.titleStyle}>{book.title}</Text>
                <Text style={BookCardStyles.authorStyle}>{book.author}</Text>
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
        </View>
    )
}