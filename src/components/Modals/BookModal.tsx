import { Text, View, Modal, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import TitleScreen from '../TitleScreen'
import BookModalStyles from '../../styles/components/Modals/BookModalStyles'
import Book from '../../Common/Class/Book'
import TextIconButton from '../Buttons/TextIconButton'
import { COLORS } from '../../Common/CommonColors'
import { ScrollView } from 'react-native-gesture-handler'
import TagSticker from '../Buttons/TagSticker'
import ReadingCard from '../Cards/ReadingCard'
import NumberIcon from '../NumberIcon'

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
            setShowModal(!showModal)
        } catch(error) {
            ToastAndroid.show("Problème lors de la suppression du livre" , ToastAndroid.CENTER);
        }
        setIsLoading(false);
    }

    return (
        <Modal style={BookModalStyles.modalContainer} animationType="slide" transparent={true} visible={showModal} onRequestClose={() => setShowModal(!showModal)}>
            <View style={BookModalStyles.container}>
                <ScrollView style={BookModalStyles.scrollViewContainer} showsVerticalScrollIndicator={false}>
                    <TextIconButton 
                        callBack={() => setShowModal(!showModal)} 
                        iconSize={24} 
                        text={' Retour '} 
                        iconName={'arrow-left-top'} 
                        iconColor={COLORS.background} 
                        buttonStyle={BookModalStyles.returnButton}
                    />
                    <Text style={BookModalStyles.title}>{book.title}</Text>
                    <Text style={BookModalStyles.author}>{book.author}</Text>

                    <Text style={BookModalStyles.textHolder}>Statistiques : </Text>
                    <View style={BookModalStyles.statsContainer}>
                        <NumberIcon iconNumber={book.numberOP} iconName={"book-open-page-variant-outline"} iconSize={30} iconFontSize={30}/>
                        <NumberIcon iconNumber={book.notePerso} iconName={"star"} iconSize={30} iconFontSize={30}/>
                        <Text style={BookModalStyles.textNumber}>{book.releaseYear}</Text>
                    </View>
                    {
                        book.tags.length !== 0 && 
                        <View>
                            <Text style={BookModalStyles.textHolder}>Tags : ({book.tags.length})</Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={BookModalStyles.tagsContainer}>
                                {
                                    book.tags.map((tag, idTag) => 
                                        <TagSticker key={idTag} tag={tag}/>
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
    )
}