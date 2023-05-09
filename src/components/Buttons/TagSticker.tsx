import { Text } from 'react-native'
import React from 'react'
import TagStickerStyles from '../../styles/components/Buttons/TagStickerStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Tag from '../../Common/Class/Tag';

type Props = {
    tag: Tag,
}

export default function TagSticker({tag} : Props) {

    const onclickTag = () => {
        alert(tag.textTag)
    }

    return (
        <TouchableOpacity style={TagStickerStyles.container} onPress={onclickTag}>
            <Text style={TagStickerStyles.textTag} numberOfLines={1}>{tag.textTag}</Text>
        </TouchableOpacity>
    )
}