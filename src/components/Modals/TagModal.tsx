import { View, Text, Modal, ScrollView, ToastAndroid } from 'react-native'
import React, { useCallback, useState } from 'react'
import Tag from '../../Common/Class/Tag';
import TextIconButton from '../Buttons/TextIconButton';
import { COLORS } from '../../Common/CommonColors';
import TagModalStyles from '../../styles/components/Modals/TagModalStyles';
import BookCard from '../Cards/BookCard';
import GestureRecognizer from 'react-native-swipe-gestures';
import { Feather } from '@expo/vector-icons';
import CommonStyles from '../../styles/CommonStyles';
import TagBuilder from '../../Common/Class/TagBuilder';

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
        const newTag:TagBuilder = new TagBuilder(tag.client);
        newTag.tagToBuilder(tag);
        navigation.navigate('EditTagScreen', { newTag });
    }

    return (
        <GestureRecognizer style={{flex: 1}} onSwipeDown={ () => setShowModalTag(false) }>
            <Modal style={TagModalStyles.modalContainer} animationType="slide" transparent={true} visible={showModalTag} onRequestClose={() => setShowModalTag(!showModalTag)}>
                <View style={TagModalStyles.container}>
                    <View style={TagModalStyles.returnButton}>
                        <Feather name={'minus'} size={65} color={COLORS.accentColor}/>
                    </View>
                    <View style={TagModalStyles.tagContainer}>
                        <ScrollView style={CommonStyles.scrollViewContainer} showsVerticalScrollIndicator={false}>
                            <Text style={TagModalStyles.textTag}>{tag.textTag}</Text>
                            {   
                                tag.tagBooksService.books.size !== 0 &&
                                <View style={TagModalStyles.booksContainer}>
                                    <Text style={TagModalStyles.textHolder}>Livres : ({tag.tagBooksService.books.size.toString()})</Text>
                                    {
                                        Array.from(tag.tagBooksService.books.values()).map((book, idBook) => 
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
                </View>
            </Modal>
        </GestureRecognizer>
    )
}