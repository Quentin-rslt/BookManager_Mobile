import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import ReadingCardStyles from '../../styles/components/cards/ReadingCardStyles'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../../Common/CommonColors';
import Reading from '../../Common/Class/Reading';

interface Props {
    reading : Reading;
    showDeleteButton?: boolean;
}

export default function ReadingCard({reading, showDeleteButton=false} : Props) {

    const onClickDeleteReading = () => {
        alert('Delete reading');
    };

    return (
        <View style={ReadingCardStyles.container}>
            <View style={showDeleteButton ? ReadingCardStyles.cardContainerWithDelete : ReadingCardStyles.cardContainerWithoutDelete}>
                <Text style={ReadingCardStyles.text}>{reading.startReading.toTimeString()}</Text>
                <Text style={ReadingCardStyles.text}> au </Text>
                <Text style={ReadingCardStyles.text}>{reading.endReading.toTimeString()}</Text>
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