import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ReadingCardStyles from '../../styles/components/cards/ReadingCardStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../../Common/CommonColors';
import Reading from '../../Common/Class/Reading';

interface Props {
    readings : Reading[],
    setReadings: React.Dispatch<React.SetStateAction<Reading[]>>;
    reading : Reading;
    idReading : number;
    showDeleteButton?: boolean;
}

export default function ReadingCard({reading, showDeleteButton=false, setReadings, readings, idReading} : Props) {
    const startReading:string = reading.startReadingDate.toLocaleDateString();
    const endReading:string = reading.endReadingDate.toLocaleDateString();

    const onClickDeleteReading = () => {
        readings.splice(idReading, 1);
        const newReadings:Reading[] = Array.from(readings);
        setReadings(newReadings);
    };

    return (
        <View style={ReadingCardStyles.container}>
            <View style={showDeleteButton ? ReadingCardStyles.cardContainerWithDelete : ReadingCardStyles.cardContainerWithoutDelete}>
                <Text style={ReadingCardStyles.text}>{startReading}</Text>
                <Text style={ReadingCardStyles.text}> au </Text>
                <Text style={ReadingCardStyles.text}>{endReading}</Text>
            </View>
            {
                showDeleteButton &&
                <TouchableOpacity style={ReadingCardStyles.deleteContainer} onPress={onClickDeleteReading}>
                    <MaterialCommunityIcons name={'delete'} size={24} color={COLORS.accentColor}/>
                </TouchableOpacity>
            }
        </View>
    )
}