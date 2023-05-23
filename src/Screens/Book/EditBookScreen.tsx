import { View, Text, ScrollView, ToastAndroid } from 'react-native'
import React, { useCallback, useState } from 'react'
import CommonStyles from '../../styles/CommonStyles'
import TitleScreen from '../../components/TitleScreen'
import EditBookStyles from '../../styles/Screens/Book/EditBookStyles'
import TopBar from '../../components/Inputs/TopBar'
import TextIconButton from '../../components/Buttons/TextIconButton'
import InputText from '../../components/Inputs/InputText'
import ReadingCard from '../../components/Cards/ReadingCard'
import TagSticker from '../../components/Buttons/TagSticker'
import DatePicker from '../../components/Buttons/DatePicker'
import { LogBox } from 'react-native';
import TagsModal from '../../components/Modals/TagsModal'
import BookBuilder from '../../Common/Class/BookBuilder'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function EditBookScreen({ navigation, route } : any) {

    const newBook:BookBuilder = route.params.newBook;

    const [refresh, setRefresh] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);

    const onRefreshBooks = useCallback(async () => {
        setIsLoading(true);
        setIsLoading(false);
    }, []);

    const onClickSaveBook = async () => {
        setIsLoading(true);
        
        try{
            if(newBook.title != "" && newBook.author != ""){
                await newBook.client.bookService.editBook(newBook);

                navigation.goBack();
            } else {
                ToastAndroid.show("Veuillez mettre un titre et un author" , ToastAndroid.CENTER);
            }
        } catch(error) {
            ToastAndroid.show("Problème lors de la modification d'un livre" , ToastAndroid.CENTER);
        }

        setIsLoading(false);
    };

    const onChangeTitle = (text : string) => {
        newBook.setTitle(text);
    };

    const onChangeAuthor = (text : string) => {
        newBook.setAuthor(text);
    };

    const onChangeSummary = (text : string) => {
        newBook.setSummary(text);
    };

    const onChangeNumberOP = (text : string) => {
        newBook.setNumberOP(+text);
    };

    const onChangeNotePerso = (text : string) => {
        newBook.setNotePerso(+text);
    };

    const onChangeReleaseYear = (text : string) => {
        newBook.setReleaseYear(text);
    };

    return (
        <View style={CommonStyles.container}>
            <TopBar iconButtonShow={true} searchBarShow={false}/>
            <View style={CommonStyles.content}>
                <ScrollView style={CommonStyles.scrollViewContainer}>
                    <TitleScreen title={"Modifier un livre"}/>
                    <View style={EditBookStyles.container}>
                        <InputText placeholder={'Titre'} defaultValue={newBook.title} onChangeText={onChangeTitle}/>
                        <InputText placeholder={'Autheur'} defaultValue={newBook.author} onChangeText={onChangeAuthor}/>
                        <View style={EditBookStyles.inputNumberContainer}>
                            <InputText placeholder={'Page'} containerStyle={EditBookStyles.inputNumber} defaultValue={newBook.numberOP.toString()} keyboardType='numeric' onChangeText={onChangeNumberOP}/>
                            <InputText placeholder={'Note'} containerStyle={EditBookStyles.inputNumber} defaultValue={newBook.notePerso.toString()} keyboardType='numeric' onChangeText={onChangeNotePerso}/>
                        </View>
                        <InputText placeholder={'Année de sortie'} defaultValue={newBook.releaseYear} keyboardType='numeric' onChangeText={onChangeReleaseYear}/>
                        <View style={EditBookStyles.tagsContainer}>
                            <Text style={EditBookStyles.text}>Tags : </Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {
                                   newBook.tags.map((tag, idTag) => 
                                        <TagSticker key={idTag} tag={tag} onRefresh={onRefreshBooks} navigation={navigation}/>
                                    )
                                }
                                <TextIconButton callBack={() => setShowModal(true)} iconName={'square-edit-outline'} iconSize={15} showText={false} buttonStyle={EditBookStyles.addTagContainer}/>
                                <TagsModal book={newBook} showModal={showModal} setShowModal={setShowModal}/>
                            </ScrollView>
                        </View>
                        <InputText placeholder={'Description'} multiline={true} defaultValue={newBook.summary} containerStyle={EditBookStyles.descriptionContainer} onChangeText={onChangeSummary}/>
                        <View style={EditBookStyles.readingsContainer}>
                            <Text style={EditBookStyles.text}>Lectures : </Text>
                            <DatePicker book={newBook} setRefresh={setRefresh} refresh={refresh}/>
                            {
                                newBook.readings.map((reading, idReading) => 
                                    <ReadingCard key={idReading} reading={reading} showDeleteButton={true} idReading={idReading} book={newBook} setRefresh={setRefresh} refresh={refresh}/>
                                )
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>
            <TextIconButton callBack={onClickSaveBook} isLoading={isLoading} text={'Enregistrer'} showIcon={false} buttonStyle={EditBookStyles.button}/>
        </View>
    )
}