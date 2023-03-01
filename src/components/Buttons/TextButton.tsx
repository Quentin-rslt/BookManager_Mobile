import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import TextButtonStyles from '../../styles/components/Buttons/TextButtonStyles';
import { Text } from 'react-native';

interface Props {
    callBack: ()=>void;
    name: string;
    containerStyle?: any;
    textStyle?: any;
}

export default function TextButton({callBack, name, containerStyle, textStyle} : Props) {
    return (
        <TouchableOpacity onPress={callBack} style={[TextButtonStyles.container, containerStyle]}>
            <Text style={[TextButtonStyles.text, textStyle]}>{name}</Text>
        </TouchableOpacity>
    )
}