import { Text } from 'react-native'
import React from 'react'
import TitleScreenStyles from '../styles/components/TitleScreenStyles';

type Props = {
    title : string;
}

export default function TitleScreen({title}: Props) {
    return (
        <Text style={TitleScreenStyles.title}>
            {title}
        </Text>
    )
}