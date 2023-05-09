import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ReadingCardStyles from '../../styles/components/cards/ReadingCardStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../../Common/CommonColors';
import Reading from '../../Common/Class/Reading';
import Book from '../../Common/Class/Book';

interface Props {
    book: Book;
    refresh: boolean;
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
    reading : Reading;
    idReading : number;
    showDeleteButton?: boolean;
}

export default function ReadingCard({reading, showDeleteButton=false, book, refresh, setRefresh, idReading} : Props) {
    const startReading:string = reading.startReadingDate.toLocaleDateString();
    const endReading:string = reading.endReadingDate.toLocaleDateString();
    const delay = (((reading.endReadingDate.getTime() - reading.startReadingDate.getTime()) / 86400000) + 1).toFixed(0);

    const onClickDeleteReading = () => {
        book.deleteReading(idReading);
        setRefresh(!refresh);
    };

    return (
        <View style={ReadingCardStyles.container}>
            <Text style={ReadingCardStyles.textDelay}>{delay} journée de lecture du :</Text>
            <View style={ReadingCardStyles.datesContainer}>
                <Text style={ReadingCardStyles.textDate}>{startReading}</Text>
                <Text style={ReadingCardStyles.textDate}> au </Text>
                <Text style={ReadingCardStyles.textDate}>{endReading}</Text>
                {
                    showDeleteButton &&
                    <TouchableOpacity onPress={onClickDeleteReading}>
                        <MaterialCommunityIcons name={'delete'} size={24} color={COLORS.accentColor}/>
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}