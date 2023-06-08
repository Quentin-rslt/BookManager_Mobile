import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import Book from '../../library/class/Book';
import BookBuilder from '../../library/builders/BookBuilder';
import Modal from "react-native-modal";
import EditModalBookStyles from '../../styles/components/Modals/EditModalBookStyles';
import { COLORS } from '../../library/CommonColors';
import { Feather } from '@expo/vector-icons';
import TextIconButton from '../Buttons/TextIconButton';

interface Props {
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    book: Book;
    navigation: any;
}

export default function EditBookModal({isLoading, setIsLoading, showModal, setShowModal, book, navigation}: Props) {

    const onDeleteBook = async () => {
        setIsLoading(true);
        try {
            await book.client.bookService.deleteBook(book);
            setShowModal(false);
            navigation.goBack();
        } catch(error) {
            console.log(error);
            ToastAndroid.show("Problème lors de la suppression du livre" , ToastAndroid.CENTER);
        }
        setIsLoading(false);
    };

    const onEditBook = () => {
        const newBook:BookBuilder = new BookBuilder(book.client, book.toJSON());
        navigation.navigate('EditBookScreen', { newBook });
    };

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
                <TextIconButton callBack={onEditBook} iconSize={30} text='Modifier le livre' iconName={'square-edit-outline'} iconColor={COLORS.accentColor} buttonStyle={EditModalBookStyles.editButton} textStyle={EditModalBookStyles.textEditButton}/>
                <TextIconButton callBack={onDeleteBook} isLoading={isLoading} iconSize={30} text='Supprimer le livre' iconName={'delete-outline'} iconColor={COLORS.accentColor} buttonStyle={EditModalBookStyles.editButton} textStyle={EditModalBookStyles.textEditButton}/>
            </View>
        </Modal>
    )
}