import { Text, View } from 'react-native'
import React from 'react'
import TagStickerStyles from '../styles/components/TagStickerStyles';

type Props = {
    text: string,
}

export default function TagSticker({text} : Props) {
    return (
        <View style={TagStickerStyles.container}>
            <Text style={TagStickerStyles.textTag}>{text}</Text>
        </View>
    )
}