import { View, Text, Modal, ScrollView, ToastAndroid } from 'react-native'
import React, { useCallback, useState } from 'react'
import Tag from '../../Common/Class/Tag';
import TextIconButton from '../Buttons/TextIconButton';
import { COLORS } from '../../Common/CommonColors';
import TagModalStyles from '../../styles/components/Modals/TagModalStyles';
import BookCard from '../Cards/BookCard';
import GestureRecognizer from 'react-native-swipe-gestures';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
    tag: Tag;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>> ;
    onRefresh?: () => Promise<void>;
}

export default function TagModal({ tag, showModal, setShowModal, onRefresh }: Props) {

    const [isLoading, setIsLoading] = useState<boolean>(false);


    const onDeleteTag = async () => {
        setIsLoading(true);
        try {
            await tag.client.tagService.deleteTag(tag);
            onRefresh && onRefresh();
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
        <GestureRecognizer style={{flex: 1}} onSwipeDown={ () => setShowModal(false) }>
            <Modal style={TagModalStyles.modalContainer} animationType="slide" transparent={true} visible={showModal} onRequestClose={() => setShowModal(!showModal)}>
                <View style={TagModalStyles.container}>
                    <View style={TagModalStyles.returnButton}>
                        <MaterialCommunityIcons name={'minus'} size={35} color={COLORS.accentColor}/>
                    </View>
                    <ScrollView style={TagModalStyles.scrollViewContainer} showsVerticalScrollIndicator={false}>
                        <Text style={TagModalStyles.textTag}>{tag.textTag}</Text>
                        {   
                            tag.tagBooksService.books.size !== 0 &&
                            <View>
                                <Text style={TagModalStyles.textHolder}>Livres : ({tag.tagBooksService.books.size.toString()})</Text>
                                {
                                    Array.from(tag.tagBooksService.books.values()).map((book, idBook) => 
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
        </GestureRecognizer>
    )
}