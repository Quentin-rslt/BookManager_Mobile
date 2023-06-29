import { View, Text, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";
import { COLORS } from '../../library/CommonColors';
import { Feather } from '@expo/vector-icons';
import SearchBooksModalStyles from '../../styles/components/Modals/SearchBooksModalStyles';
import InputText from '../Inputs/InputText';
import TextIconButton from '../Buttons/TextIconButton';
import CriteriaSearchBooksBuilder from '../../library/builders/CriteriaSearchBooksBuilder';
import Client from '../../library/class/Client';

interface Props {
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
    onRefresh: () => void;
    client: Client;
}

export default function SearchBooksModal({showModal, setShowModal, client, onRefresh}: Props) {

    const criteriaBuilder = client.criteriaSearchBooks;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isFav, setIsFav] = useState<boolean>(criteriaBuilder.isFav);

    const onClickFiltered = async() => {
        setIsLoading(true);

        try {
            await client.bookService.fetchFilteredBooks(criteriaBuilder);

            client.isFilteredBooks = true;
            onRefresh();
            setShowModal(false);
        } catch (error) {
            ToastAndroid.show("Problème lors de la recherche" , ToastAndroid.CENTER);
        }

        setIsLoading(false);
    };

    const onClickResetFiltered = () => {
        client.criteriaSearchBooks = new CriteriaSearchBooksBuilder(client);
        client.isFilteredBooks = false;
        client.bookService.filteredBooks = new Map();
        setIsFav(false);
        onRefresh();
        setShowModal(false);
    };

    const onLikedBook = async () => {
        criteriaBuilder.isFav = !isFav;
        setIsFav(!isFav);
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
                <InputText placeholder={'Titre'} defaultValue={criteriaBuilder.title} onChangeText={(text) => criteriaBuilder.title = text}/>
                <InputText placeholder={'Autheur'} defaultValue={criteriaBuilder.author} onChangeText={(text) => criteriaBuilder.author = text}/>
                <View style={SearchBooksModalStyles.rangeContainer}>
                    <InputText placeholder={'Nombre de page'} keyboardType='numeric' containerStyle={SearchBooksModalStyles.rangeComponent} defaultValue={criteriaBuilder.numberOPStart.toString()} onChangeText={(text) => criteriaBuilder.numberOPStart = +text}/>
                    <InputText placeholder={'Et entre'} keyboardType='numeric' containerStyle={SearchBooksModalStyles.rangeComponent} defaultValue={criteriaBuilder.numberOPEnd.toString()} onChangeText={(text) => criteriaBuilder.numberOPEnd = +text}/>
                </View>
                <View style={SearchBooksModalStyles.rangeContainer}>
                    <InputText placeholder={'Note perso'} keyboardType='numeric' containerStyle={SearchBooksModalStyles.rangeComponent} defaultValue={criteriaBuilder.notePersoStart.toString()} onChangeText={(text) => criteriaBuilder.notePersoStart = +text}/>
                    <InputText placeholder={'Et entre'} keyboardType='numeric' containerStyle={SearchBooksModalStyles.rangeComponent} defaultValue={criteriaBuilder.notePersoEnd.toString()} onChangeText={(text) => criteriaBuilder.notePersoEnd = +text}/>
                </View>
                <View style={SearchBooksModalStyles.rangeContainer}>
                    <InputText placeholder={'Date de sortie'} keyboardType='numeric' containerStyle={SearchBooksModalStyles.rangeComponent} defaultValue={criteriaBuilder.releaseYearStart.toString()} onChangeText={(text) => criteriaBuilder.releaseYearStart = +text} maxLength={4}/>
                    <InputText placeholder={'Et entre'} keyboardType='numeric' containerStyle={SearchBooksModalStyles.rangeComponent} defaultValue={criteriaBuilder.releaseYearEnd.toString()} onChangeText={(text) => criteriaBuilder.releaseYearEnd = +text} maxLength={4}/>
                </View>
                <View style={SearchBooksModalStyles.likeContainer}>
                    <Text style={SearchBooksModalStyles.holderText}> Livre favoris (oui/non) </Text>
                    {
                        isFav ?
                        <TextIconButton callBack={onLikedBook} showText={false} iconName={'cards-heart'} iconSize={25} iconColor={COLORS.accentColor}/>
                        :  
                        <TextIconButton callBack={onLikedBook} showText={false} iconName={'cards-heart-outline'} iconSize={25} iconColor={COLORS.accentColor}/>
                    }
                </View>
                <View style={SearchBooksModalStyles.buttonsContainer}>
                    <TextIconButton buttonStyle={SearchBooksModalStyles.searchButton} showIcon={false} text='Rechercher' callBack={onClickFiltered} isLoading={isLoading} loadColor={COLORS.background}/>
                    <TextIconButton buttonStyle={SearchBooksModalStyles.searchButton} showIcon={false} text='Rénitialiser' callBack={onClickResetFiltered} loadColor={COLORS.background}/>
                </View>
            </View>
        </View>
    </Modal>
    )
}