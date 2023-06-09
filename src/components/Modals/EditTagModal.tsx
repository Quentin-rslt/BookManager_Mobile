import { View, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";
import EditModalBookStyles from '../../styles/components/Modals/EditModalBookStyles';
import { COLORS } from '../../library/CommonColors';
import { Feather } from '@expo/vector-icons';
import TextIconButton from '../Buttons/TextIconButton';
import Tag from '../../library/class/Tag';
import TagBuilder from '../../library/builders/TagBuilder';

interface Props {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    newTag: Tag;
    navigation: any;
}

export default function EditTagModal({showModal, setShowModal, newTag: tag, navigation}: Props) {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onDeleteTag = async () => {
        setIsLoading(true);
        try {
            await tag.client.tagService.deleteTag(tag);
            
            navigation.goBack();
            setShowModal(false);
        } catch(error) {
            console.log(error);
            ToastAndroid.show("Problème lors de la suppression du tag" , ToastAndroid.CENTER);
        }
        setIsLoading(false);
    };

    const onEditTag = () => {
        const newTag:TagBuilder = new TagBuilder(tag.client, tag.toJSON());
        navigation.navigate('EditTagScreen', { newTag });
    }

    return (
        <Modal 
            style={{ margin: 0 }} 
            isVisible={showModal} 
            onBackdropPress={() => setShowModal(false)} 
            onSwipeComplete={() => setShowModal(false)} 
            swipeDirection={'down'}
        >
            <View style={EditModalBookStyles.container}>
                <View style={EditModalBookStyles.returnButton}>
                    <Feather name={'minus'} size={65} color={COLORS.accentColor}/>
                </View>
                <TextIconButton callBack={onEditTag} iconSize={30} text='Modifier le tag' iconName={'square-edit-outline'} iconColor={COLORS.accentColor} buttonStyle={EditModalBookStyles.editButton} textStyle={EditModalBookStyles.textEditButton}/>
                <TextIconButton callBack={onDeleteTag} isLoading={isLoading} iconSize={30} text='Supprimer le tag' iconName={'delete-outline'} iconColor={COLORS.accentColor} buttonStyle={EditModalBookStyles.editButton} textStyle={EditModalBookStyles.textEditButton}/>
            </View>
        </Modal>
    )
}