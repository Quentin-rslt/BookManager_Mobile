import { View, Text, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";
import { COLORS } from '../../library/CommonColors';
import { Feather } from '@expo/vector-icons';
import SearchBooksModalStyles from '../../styles/components/Modals/SearchBooksModalStyles';
import InputText from '../Inputs/InputText';
import TextIconButton from '../Buttons/TextIconButton';
import Book from '../../library/class/Book';
import BookSearchCriteriaBuilder from '../../library/builders/BookSearchCriteriaBuilder';

interface Props {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
    criteriaBuilder: BookSearchCriteriaBuilder;
}

export default function SearchBooksModal({showModal, setShowModal, setBooks, criteriaBuilder}: Props) {

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [title, setTitle] = useState<string>();
    const [author, setAuthor] = useState<string>();

    const onClickSearchButton = async() => {
        setIsLoading(true);

        try {
            const newBooks = await criteriaBuilder.client.bookService.searchBooksByCriteria(criteriaBuilder);
            
            setBooks([...newBooks]);
            setShowModal(false)
        } catch (error) {
            //ToastAndroid.show("Problème lors de la recherche" , ToastAndroid.CENTER);
        }

        setIsLoading(false);
    };

    return (
        <Modal 
            style={{ margin: 0 }} 
            isVisible={showModal} 
            onBackdropPress={() => setShowModal(false)} 
            onSwipeComplete={() => setShowModal(false)} 
            swipeDirection={'down'}
        >
        <View style={SearchBooksModalStyles.container}>
            <View style={SearchBooksModalStyles.returnButton}>
                <Feather name={'minus'} size={65} color={COLORS.accentColor}/>
            </View>
            <View style={{marginBottom: 15}}>
                <Text style={SearchBooksModalStyles.titleModal}>Critères de recherche</Text>
            </View>
            <View style={SearchBooksModalStyles.criteriaContainer}>
                <InputText placeholder={'Titre'} defaultValue={criteriaBuilder.title} onChangeText={(text) => setTitle(text)}/>
                <InputText placeholder={'Autheur'} defaultValue={criteriaBuilder.author} onChangeText={(text) => setAuthor(text)}/>
                <View style={SearchBooksModalStyles.rangeContainer}>
                    <InputText placeholder={'Nombre de page'} keyboardType='numeric' containerStyle={SearchBooksModalStyles.rangeComponent} defaultValue={criteriaBuilder.numberOPStart.toString()} onChangeText={(text) => setTitle(text)}/>
                    <InputText placeholder={'Et entre'} keyboardType='numeric' containerStyle={SearchBooksModalStyles.rangeComponent} defaultValue={criteriaBuilder.numberOPEnd.toString()} onChangeText={(text) => setAuthor(text)}/>
                </View>
                <View style={SearchBooksModalStyles.rangeContainer}>
                    <InputText placeholder={'Note perso'} keyboardType='numeric' containerStyle={SearchBooksModalStyles.rangeComponent} defaultValue={criteriaBuilder.notePersoStart.toString()} onChangeText={(text) => setTitle(text)}/>
                    <InputText placeholder={'Et entre'} keyboardType='numeric' containerStyle={SearchBooksModalStyles.rangeComponent} defaultValue={criteriaBuilder.notePersoEnd.toString()} onChangeText={(text) => setAuthor(text)}/>
                </View>
                <View style={SearchBooksModalStyles.rangeContainer}>
                    <InputText placeholder={'Date de sortie'} keyboardType='numeric' containerStyle={SearchBooksModalStyles.rangeComponent} defaultValue={criteriaBuilder.releaseYearStart.toString()} onChangeText={(text) => setTitle(text)} maxLength={4}/>
                    <InputText placeholder={'Et entre'} keyboardType='numeric' containerStyle={SearchBooksModalStyles.rangeComponent} defaultValue={criteriaBuilder.releaseYearEnd.toString()} onChangeText={(text) => setAuthor(text)} maxLength={4}/>
                </View>
                <TextIconButton buttonStyle={SearchBooksModalStyles.searchButton} showIcon={false} text='Rechercher' callBack={onClickSearchButton} isLoading={isLoading} loadColor={COLORS.background}/>
            </View>
        </View>
    </Modal>
    )
}