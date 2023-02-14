import { Text, View } from 'react-native'
import React from 'react'
import Book from '../Common/types/book'
import BookCardStyles from '../styles/components/BookCardStyles';

type Props = {
    book: Book;
}

export default function BookCard({book} : Props) {
    return (
        <View style={BookCardStyles.container}>
            <Text>
               
            </Text>
        </View>
    )
}