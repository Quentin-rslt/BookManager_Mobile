import { Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import TextIconButtonStyles from '../../styles/components/Buttons/TextIconButtonStyles';

interface Props {
    callBack: ()=>void;
    size ?: number;
    text ?: string;
    nameIcon ?: any;
    color ?: string;
    containerStyle?: any;
    textStyle?: any;
    showIcon ?: boolean;
    showText ?: boolean;
}

export default function TextIconButton({callBack, nameIcon: name, size, color, containerStyle, textStyle, text, showIcon = true, showText = true} : Props) {
    return (
        <TouchableOpacity onPress={callBack} style={[TextIconButtonStyles.container, containerStyle]}>
            {
                showIcon && <MaterialCommunityIcons name={name} size={size} color={color}/>
            }
            {
                showText && <Text style={[TextIconButtonStyles.text, textStyle]}>{text}</Text>
            }
        </TouchableOpacity>
    )
}