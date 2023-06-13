import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ReadingCardWithBookStyles from '../../../styles/components/cards/reading/ReadingCardWithBookStyles'
import Reading from '../../../library/class/Reading';

interface Props {
    reading : Reading;
}

export default function ReadingCardWithBook({reading} : Props) {

    const startReadingDate:Date = new Date(reading.startReadingDate);
    const endReadingDate:Date = new Date(reading.endReadingDate)

    const startReadingString:string = startReadingDate.toLocaleDateString();
    const endReadingString:string = endReadingDate.toLocaleDateString();

    return (
        <TouchableOpacity style={ReadingCardWithBookStyles.container}>
            <Text style={ReadingCardWithBookStyles.textTitleBook}>{reading.book?.title}</Text>
            <View style={ReadingCardWithBookStyles.datesContainer}>
                <Text style={ReadingCardWithBookStyles.textDate}>{startReadingString}</Text>
                <Text style={ReadingCardWithBookStyles.textDate}> au </Text>
                <Text style={ReadingCardWithBookStyles.textDate}>{endReadingString}</Text>
            </View>
        </TouchableOpacity>
    )
}