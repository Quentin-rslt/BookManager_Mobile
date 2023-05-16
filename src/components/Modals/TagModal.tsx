import { View, Text, Modal, ScrollView, ToastAndroid } from 'react-native'
import React, { useCallback, useState } from 'react'
import Tag from '../../Common/Class/Tag';
import TextIconButton from '../Buttons/TextIconButton';
import { COLORS } from '../../Common/CommonColors';
import TagModalStyles from '../../styles/components/Modals/TagModalStyles';
import BookCard from '../Cards/BookCard';

interface Props {
    tag: Tag;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>> ;
    onRefresh: () => Promise<void>;
}

export default function TagModal({ tag, showModal, setShowModal, onRefresh }: Props) {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onDeleteTag = async () => {
        setIsLoading(true);
        try {
            await tag.client.tagService.deleteTag(tag);
            onRefresh();
            setShowModal(!showModal);
        } catch(error) {
            console.log(error);
            ToastAndroid.show("Problème lors de la suppression du tag" , ToastAndroid.CENTER);
        }
        setIsLoading(false);
    };

    const onRefreshBooks = useCallback(async () => {
        setIsLoading(true);
        setIsLoading(false);
    }, []);

    return (
        <Modal style={TagModalStyles.modalContainer} animationType="slide" transparent={true} visible={showModal} onRequestClose={() => setShowModal(!showModal)}>
            <View style={TagModalStyles.container}>
                <ScrollView style={TagModalStyles.scrollViewContainer} showsVerticalScrollIndicator={false}>
                    <TextIconButton 
                        callBack={() => setShowModal(!showModal)} 
                        iconSize={24} 
                        text={' Retour '} 
                        iconName={'arrow-left-top'} 
                        iconColor={COLORS.background} 
                        buttonStyle={TagModalStyles.returnButton}
                    />
                    <Text style={TagModalStyles.textTag}>{tag.textTag}</Text>
                    {   
                        tag.books.size !== 0 &&
                        <View>
                            <Text style={TagModalStyles.textHolder}>Livres : ({tag.books.size})</Text>
                            {
                                Array.from(tag.books.values()).map((book, idBook) => 
                                    <BookCard key={idBook} book={book} onRefresh={onRefreshBooks}/>
                                )
                            }
                        </View>
                    }
                </ScrollView>
                <View style={TagModalStyles.buttonsContainer}>
                    <TextIconButton callBack={() => setShowModal(!showModal)} showIcon={false} text='Modifier' buttonStyle={TagModalStyles.button}/>
                    <TextIconButton callBack={onDeleteTag} isLoading={isLoading} showIcon={false} text='Supprimer' buttonStyle={TagModalStyles.button}/>
                </View>
            </View>
        </Modal>
    )
}