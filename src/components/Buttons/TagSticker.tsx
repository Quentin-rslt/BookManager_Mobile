import { Text } from 'react-native'
import React from 'react'
import TagStickerStyles from '../../styles/components/Buttons/TagStickerStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Tag from '../../Common/Class/Tag';
import TextIconButton from './TextIconButton';

type Props = {
    tag: Tag,
}

export default function TagSticker({tag} : Props) {

    const onclickTag = () => {
        alert(tag.textTag)
    }

    return (
        <TextIconButton callBack={onclickTag} showIcon={false} containerStyle={TagStickerStyles.container} textStyle={TagStickerStyles.textTag} text={tag.textTag} numberOfLineText={1} />
    )
}