import { Text, View, Modal, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import BookModalStyles from '../../styles/components/Modals/BookModalStyles'
import Book from '../../library/class/Book'
import { COLORS } from '../../library/CommonColors'
import { ScrollView } from 'react-native-gesture-handler'
import TagSticker from '../Buttons/TagSticker'
import ReadingCard from '../cards/ReadingCard'
import NumberIcon from '../NumberIcon'
import GestureRecognizer from 'react-native-swipe-gestures'
import { Feather } from '@expo/vector-icons';
import TextIconButton from '../Buttons/TextIconButton'
import CommonStyles from '../../styles/CommonStyles'
import BookBuilder from '../../library/builders/BookBuilder'

interface Props {
    book: Book;
    showModalBook: boolean;
    setShowModalBook: React.Dispatch<React.SetStateAction<boolean>> ;
    onRefresh: () => Promise<void> | void;
    navigation: any
}

export default function BookModal({ book, showModalBook, setShowModalBook, onRefresh, navigation }: Props) {

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onDeleteBook = async () => {
        setIsLoading(true);
        try {
            await book.client.bookService.deleteBook(book);
            onRefresh();
            setShowModalBook(!showModalBook);
        } catch(error) {
            console.log(error);
            ToastAndroid.show("Problème lors de la suppression du livre" , ToastAndroid.CENTER);
        }
        setIsLoading(false);
    }

    const onEditBook = () => {
        setShowModalBook(!showModalBook);
        const newBook:BookBuilder = new BookBuilder(book.client, book.toJSON());
        navigation.navigate('EditBookScreen', { newBook });
    };

    return (
        <GestureRecognizer style={{flex: 1}} onSwipeDown={ () => setShowModalBook(false) }>
            <Modal style={BookModalStyles.modalContainer} animationType="slide" transparent={true} visible={showModalBook} onRequestClose={() => setShowModalBook(!showModalBook)}>
                <View style={BookModalStyles.container}>
                    <View style={BookModalStyles.returnButton}>
                        <Feather name={'minus'} size={65} color={COLORS.accentColor}/>
                    </View>
                    <ScrollView style={CommonStyles.scrollViewModal} showsVerticalScrollIndicator={false}>
                        <Text style={BookModalStyles.title}>{book.title}</Text>
                        <Text style={BookModalStyles.author}>{book.author}</Text>

                        <Text style={BookModalStyles.textHolder}>Statistiques : </Text>
                        <View style={BookModalStyles.statsContainer}>
                            <NumberIcon iconNumber={book.numberOP} iconName={"book-open-page-variant-outline"} iconSize={30} iconFontSize={30}/>
                            <NumberIcon iconNumber={book.notePerso} iconName={"star"} iconSize={30} iconFontSize={30}/>
                            <Text style={BookModalStyles.textNumber}>{book.releaseYear}</Text>
                        </View>
                        {
                            book.tags.size !== 0 && 
                            <View>
                                <Text style={BookModalStyles.textHolder}>Tags : ({book.tags.size.toString()})</Text>
                                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={BookModalStyles.tagsContainer}>
                                    {
                                        Array.from(book.tags.values()).map((tag, idTag) => 
                                            <TagSticker key={idTag} tag={tag} onRefresh={onRefresh} navigation={navigation}/>
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
                            book.readings.size !== 0 &&
                            <View>
                                <Text style={BookModalStyles.textHolder}>Lectures : ({book.readings.size})</Text>
                                <View style={BookModalStyles.readingsContainer}>
                                    {
                                        Array.from(book.readings.values()).map((reading, idReading) => 
                                            <ReadingCard key={idReading} reading={reading} showDeleteButton={false} idReading={idReading} book={book}/>
                                        )
                                    }
                                </View>
                            </View>
                        }
                    </ScrollView>
                </View>
                <View style={BookModalStyles.buttonsContainer}>
                    <TextIconButton callBack={onEditBook} showIcon={false} text='Modifier' buttonStyle={BookModalStyles.button}/>
                    <TextIconButton callBack={onDeleteBook} isLoading={isLoading} showIcon={false} text='Supprimer' buttonStyle={BookModalStyles.button}/>
                </View>
            </Modal>
        </GestureRecognizer>
    )
}