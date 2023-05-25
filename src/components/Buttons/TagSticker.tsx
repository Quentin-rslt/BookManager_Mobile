import React, { useState } from 'react'
import TagStickerStyles from '../../styles/components/Buttons/TagStickerStyles';
import Tag from '../../Common/class/Tag';
import TextIconButton from './TextIconButton';
import { View } from 'react-native';
import TagModal from '../modals/TagModal';

interface Props {
    tag: Tag;
    onRefresh: () => Promise<void> | void;
    navigation: any;
}

export default function TagSticker({tag, onRefresh, navigation} : Props) {

    const [showModalTag, setShowModalTag] = useState<boolean>(false);

    const onClickTagSticker = () => {
        setShowModalTag(true);
    };

    return (
        <View>
            <TextIconButton callBack={onClickTagSticker} showIcon={false} buttonStyle={TagStickerStyles.container} textStyle={TagStickerStyles.textTag} text={tag.textTag} numberOfLineText={1}/>
            <TagModal tag={tag} showModalTag={showModalTag} setShowModalTag={setShowModalTag} onRefresh={onRefresh} navigation={navigation}/>
        </View>
    )
}