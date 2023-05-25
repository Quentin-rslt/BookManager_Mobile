import { View, Text } from 'react-native'
import React from 'react'
import ReadingCardStyles from '../../styles/components/cards/ReadingCardStyles'
import { COLORS } from '../../library/CommonColors';
import Reading from '../../library/class/Reading';
import Book from '../../library/class/Book';
import TextIconButton from '../Buttons/TextIconButton';
import BookBuilder from '../../library/builders/BookBuilder';

interface Props {
    book: Book|BookBuilder;
    refresh?: boolean;
    setRefresh?: React.Dispatch<React.SetStateAction<boolean>>;
    reading : Reading;
    idReading : number;
    showDeleteButton?: boolean;
}

export default function ReadingCard({reading, showDeleteButton=false, book, refresh, setRefresh, idReading} : Props) {

    const startReadingDate:Date = new Date(reading.startReadingDate);
    const endReadingDate:Date = new Date(reading.endReadingDate)

    const startReadingString:string = startReadingDate.toLocaleDateString();
    const endReadingString:string = endReadingDate.toLocaleDateString();
    const delay = (((endReadingDate.getTime() - startReadingDate.getTime()) / 86400000) + 1).toFixed(0);

    const onClickDeleteReading = () => {
        if(book instanceof BookBuilder){
            book.deleteReading(idReading);
            setRefresh && setRefresh(!refresh);
        }
    };

    return (
        <View style={ReadingCardStyles.container}>
            <Text style={ReadingCardStyles.textDelay}>{delay} journée de lecture du :</Text>
            <View style={ReadingCardStyles.datesContainer}>
                <Text style={ReadingCardStyles.textDate}>{startReadingString}</Text>
                <Text style={ReadingCardStyles.textDate}> au </Text>
                <Text style={ReadingCardStyles.textDate}>{endReadingString}</Text>
                {
                    showDeleteButton &&
                    <TextIconButton callBack={onClickDeleteReading} showText={false} iconName={'delete'} iconSize={24} iconColor={COLORS.accentColor}/>
                }
            </View>
        </View>
    )
}