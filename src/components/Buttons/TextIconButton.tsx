import { ActivityIndicator, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import TextIconButtonStyles from '../../styles/components/buttons/TextIconButtonStyles';
import { COLORS } from '../../library/CommonColors';

interface Props {
    callBack: ()=>void;
    iconSize ?: number;
    text ?: string;
    iconName ?: any;
    iconColor ?: string;
    buttonStyle?: any;
    textStyle?: any;
    showIcon ?: boolean;
    showText ?: boolean;
    isLoading ?: boolean;
    numberOfLineText ?: number;
}

export default function TextIconButton({callBack, iconName, iconSize, iconColor, buttonStyle, textStyle, text, showIcon = true, showText = true, isLoading = false, numberOfLineText= 2} : Props) {
    return (
        isLoading ? <ActivityIndicator size="small" color={COLORS.background} style={buttonStyle}/> :
        <TouchableOpacity onPress={callBack} style={buttonStyle}>
            {
                showIcon && <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor}/>
            }
            {
                showText && <Text style={[TextIconButtonStyles.text, textStyle]} numberOfLines={numberOfLineText}>{text}</Text>
            }
        </TouchableOpacity>
    )
}