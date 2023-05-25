import { Text, View } from 'react-native'
import React from 'react'
import NumberIconStyles from '../styles/components/NumberIconStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { COLORS } from '../library/CommonColors';

type Props = {
    iconNumber: number;
    iconName: any;
    iconSize?: number;
    iconFontSize?: number;
}

export default function NumberIcon({iconNumber, iconName, iconSize = 20, iconFontSize = 15} : Props) {
    return (
        <View style={NumberIconStyles.container}>
            <Text style={{color: COLORS.foreground, marginRight: 5, fontSize: iconFontSize, fontWeight: '700',}}>{iconNumber}</Text>
            <MaterialCommunityIcons name={iconName} size={iconSize} color="#e8d0d0"/>
        </View>
    )
}