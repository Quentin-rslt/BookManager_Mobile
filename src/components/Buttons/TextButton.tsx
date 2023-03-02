import React from 'react';
import TextButtonStyles from '../../styles/components/Buttons/TextButtonStyles';
import { Text, TouchableOpacity } from 'react-native';

interface Props {
    callBack: ()=>void;
    name: string;
    textStyle?: any;
}

export default function TextButton({callBack, name, textStyle} : Props) {
    return (
        <TouchableOpacity onPress={callBack}>
            <Text style={[TextButtonStyles.text, textStyle]}>{name}</Text>
        </TouchableOpacity>
    )
}