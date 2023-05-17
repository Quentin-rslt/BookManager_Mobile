import { Text, View, Modal, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import BookModalStyles from '../../styles/components/Modals/BookModalStyles'
import Book from '../../Common/Class/Book'
import { COLORS } from '../../Common/CommonColors'
import { ScrollView } from 'react-native-gesture-handler'
import TagSticker from '../Buttons/TagSticker'
import ReadingCard from '../Cards/ReadingCard'
import NumberIcon from '../NumberIcon'
import GestureRecognizer from 'react-native-swipe-gestures'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import TextIconButton from '../Buttons/TextIconButton'

interface Props {
    book: Book;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>> ;
    onRefresh: () => Promise<void>;
}

export default function BookModal({ book, showModal, setShowModal, onRefresh }: Props) {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onDeleteBook = async () => {
        setIsLoading(true);
        try {
            await book.client.bookService.deleteBook(book);
            onRefresh();
            setShowModal(!showModal);
        } catch(error) {
            console.log(error);
            ToastAndroid.show("Problème lors de la suppression du livre" , ToastAndroid.CENTER);
        }
        setIsLoading(false);
    }

    return (
        <GestureRecognizer style={{flex: 1}} onSwipeDown={ () => setShowModal(false) }>
            <Modal style={BookModalStyles.modalContainer} animationType="slide" transparent={true} visible={showModal} onRequestClose={() => setShowModal(!showModal)}>
                <View style={BookModalStyles.container}>
                    <View style={BookModalStyles.returnButton}>
                        <MaterialCommunityIcons name={'minus'} size={35} color={COLORS.accentColor}/>
                    </View>
                    <ScrollView style={BookModalStyles.scrollViewContainer} showsVerticalScrollIndicator={false}>
                        <Text style={BookModalStyles.title}>{book.title}</Text>
                        <Text style={BookModalStyles.author}>{book.author}</Text>

                        <Text style={BookModalStyles.textHolder}>Statistiques : </Text>
                        <View style={BookModalStyles.statsContainer}>
                            <NumberIcon iconNumber={book.numberOP} iconName={"book-open-page-variant-outline"} iconSize={30} iconFontSize={30}/>
                            <NumberIcon iconNumber={book.notePerso} iconName={"star"} iconSize={30} iconFontSize={30}/>
                            <Text style={BookModalStyles.textNumber}>{book.releaseYear}</Text>
                        </View>
                        {
                            book.bookTagsService.tags.size !== 0 && 
                            <View>
                                <Text style={BookModalStyles.textHolder}>Tags : ({book.bookTagsService.tags.size.toString()})</Text>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={BookModalStyles.tagsContainer}>
                                    {
                                        Array.from(book.bookTagsService.tags.values()).map((tag, idTag) => 
                                            <TagSticker key={idTag} tag={tag} onRefresh={onRefresh}/>
                                        )
                                    }
                                </ScrollView>
                            </View>
                        }
                        {
                            book.summary != "" && 
                            <View>
                                <Text style={BookModalStyles.textHolder}>Description : </Text>
                                <Text style={BookModalStyles.text}>{book.summary}</Text>
                            </View>
                        }
                        {
                            book.readings.length !== 0 &&
                            <View>
                                <Text style={BookModalStyles.textHolder}>Lectures : ({book.readings.length})</Text>
                                <View style={BookModalStyles.readingsContainer}>
                                    {
                                        book.readings.map((reading, idReading) => 
                                            <ReadingCard key={idReading} reading={reading} showDeleteButton={false} idReading={idReading} book={book}/>
                                        )
                                    }
                                </View>
                            </View>
                        }
                    </ScrollView>
                    <View style={BookModalStyles.buttonsContainer}>
                        <TextIconButton callBack={() => setShowModal(!showModal)} showIcon={false} text='Modifier' buttonStyle={BookModalStyles.button}/>
                        <TextIconButton callBack={onDeleteBook} isLoading={isLoading} showIcon={false} text='Supprimer' buttonStyle={BookModalStyles.button}/>
                    </View>
                </View>
            </Modal>
        </GestureRecognizer>
    )
}