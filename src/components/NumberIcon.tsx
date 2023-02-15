import { Text, View } from 'react-native'
import React from 'react'
import NumberIconStyles from '../styles/components/NumberIconStyles';
import { MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
    number: number;
    nameIcon: any;
}

export default function NumberIcon({number, nameIcon} : Props) {
    return (
        <View style={NumberIconStyles.container}>
            <Text style={NumberIconStyles.number}>{number}</Text>
            <MaterialCommunityIcons name={nameIcon} size={20} color="#e8d0d0"/>
        </View>
    )
}