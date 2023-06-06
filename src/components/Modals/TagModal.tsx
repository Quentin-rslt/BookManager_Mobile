import { View, Text, Modal, ScrollView, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Tag from '../../library/class/Tag';
import TextIconButton from '../Buttons/TextIconButton';
import { COLORS } from '../../library/CommonColors';
import TagModalStyles from '../../styles/components/Modals/TagModalStyles';
import BookCard from '../cards/BookCard';
import GestureRecognizer from 'react-native-swipe-gestures';
import { Feather } from '@expo/vector-icons';
import CommonStyles from '../../styles/CommonStyles';
import TagBuilder from '../../library/builders/TagBuilder';

interface Props {
    tag: Tag;
    showModalTag: boolean;
    setShowModalTag: React.Dispatch<React.SetStateAction<boolean>> ;
    onRefresh: () => Promise<void> | void;
    navigation: any;
}

export default function TagModal({ tag, showModalTag, setShowModalTag, onRefresh, navigation }: Props) {

    const [isLoading, setIsLoading] = useState<boolean>(false);


    const onDeleteTag = async () => {
        setIsLoading(true);
        try {
            await tag.client.tagService.deleteTag(tag);
            onRefresh();
            
            setShowModalTag(!showModalTag);
        } catch(error) {
            console.log(error);
            ToastAndroid.show("Problème lors de la suppression du tag" , ToastAndroid.CENTER);
        }
        setIsLoading(false);
    };

    const onEditTag = () => {
        setShowModalTag(!showModalTag);
        const newTag:TagBuilder = new TagBuilder(tag.client, tag.toJSON());
        navigation.navigate('EditTagScreen', { newTag });
    }

    return (
        <GestureRecognizer style={{flex: 1}} onSwipeDown={ () => setShowModalTag(false) }>
            <Modal style={TagModalStyles.modalContainer} animationType="slide" transparent={true} visible={showModalTag} onRequestClose={() => setShowModalTag(!showModalTag)}>
                <View style={TagModalStyles.container}>
                    <View style={TagModalStyles.returnButton}>
                        <Feather name={'minus'} size={65} color={COLORS.accentColor}/>
                    </View>
                    <ScrollView style={CommonStyles.scrollViewModal} showsVerticalScrollIndicator={false}>
                        <Text style={TagModalStyles.textTag}>{tag.textTag}</Text>
                        {   
                            tag.books.size !== 0 &&
                            <View style={TagModalStyles.booksContainer}>
                                <Text style={TagModalStyles.textHolder}>Livres : ({tag.books.size.toString()})</Text>
                                {
                                    Array.from(tag.books.values()).map((book, idBook) => 
                                        <BookCard key={idBook} book={book} onRefresh={onRefresh} navigation={navigation}/>
                                    )
                                }
                            </View>
                        }
                    </ScrollView>
                </View>
                <View style={TagModalStyles.buttonsContainer}>
                    <TextIconButton callBack={onEditTag} showIcon={false} text='Modifier' buttonStyle={TagModalStyles.button}/>
                    <TextIconButton callBack={onDeleteTag} isLoading={isLoading} showIcon={false} text='Supprimer' buttonStyle={TagModalStyles.button}/>
                </View>
            </Modal>
        </GestureRecognizer>
    )
}