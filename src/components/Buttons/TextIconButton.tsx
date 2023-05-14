import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import TextIconButtonStyles from '../../styles/components/Buttons/TextIconButtonStyles';
import { COLORS } from '../../Common/CommonColors';

interface Props {
    callBack: ()=>void;
    size ?: number;
    text ?: string;
    nameIcon ?: any;
    color ?: string;
    buttonStyle?: any;
    textStyle?: any;
    showIcon ?: boolean;
    showText ?: boolean;
    isLoading ?: boolean;
    numberOfLineText ?: number;
}

export default function TextIconButton({callBack, nameIcon: name, size, color, buttonStyle, textStyle, text, showIcon = true, showText = true, isLoading = false, numberOfLineText= 2} : Props) {
    return (
        isLoading ? <ActivityIndicator size="small" color={COLORS.background} style={buttonStyle}/> :
        <TouchableOpacity onPress={callBack} style={buttonStyle}>
            {
                showIcon && <MaterialCommunityIcons name={name} size={size} color={color}/>
            }
            {
                showText && <Text style={[TextIconButtonStyles.text, textStyle]} numberOfLines={numberOfLineText}>{text}</Text>
            }
        </TouchableOpacity>
    )
}