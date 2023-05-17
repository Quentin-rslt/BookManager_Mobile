import React, { useState } from 'react'
import TagStickerStyles from '../../styles/components/Buttons/TagStickerStyles';
import Tag from '../../Common/Class/Tag';
import TextIconButton from './TextIconButton';
import { View } from 'react-native';
import TagModal from '../Modals/TagModal';

interface Props {
    tag: Tag;
    onRefresh?: () => Promise<void>;
    canShowModal?: boolean;
}

export default function TagSticker({tag, onRefresh, canShowModal=true} : Props) {

    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <View>
            <TextIconButton callBack={() => setShowModal(true)} showIcon={false} buttonStyle={TagStickerStyles.container} textStyle={TagStickerStyles.textTag} text={tag.textTag} numberOfLineText={1}/>
            {
                canShowModal && 
                <TagModal tag={tag} showModal={showModal} setShowModal={setShowModal} onRefresh={onRefresh}/>
            }
        </View>
    )
}