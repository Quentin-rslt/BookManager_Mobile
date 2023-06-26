import { View, Text, ScrollView, ToastAndroid } from 'react-native'
import { useState } from 'react'
import CommonStyles from '../../styles/CommonStyles'
import EditBookStyles from '../../styles/Screens/Book/EditBookStyles'
import TopBar from '../../components/TopBar'
import TextIconButton from '../../components/Buttons/TextIconButton'
import InputText from '../../components/Inputs/InputText'
import ReadingCard from '../../components/cards/reading/ReadingCard'
import TagSticker from '../../components/Buttons/TagSticker'
import DatePicker from '../../components/Buttons/DatePicker'
import { LogBox } from 'react-native';
import TagsModal from '../../components/Modals/TagsModal'
import BookBuilder from '../../library/builders/BookBuilder'
import { COLORS } from '../../library/CommonColors'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function EditBookScreen({ navigation, route } : any) {

    const newBook:BookBuilder = route.params.newBook;

    const [refresh, setRefresh] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);

    const onClickSaveBook = async () => {
        setIsLoading(true);
        
        try{
            if(newBook.title != "" && newBook.author != ""){
                const book = await newBook.client.bookService.editBook(newBook);

                if(book) {
                    navigation.navigate('BookScreen', { book });
                }
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
            <TopBar returnButtonShow searchBarShow={false} saveButtonShow onClickSaveButton={onClickSaveBook} isLoadingSaveButton={isLoading}/>
            <ScrollView style={CommonStyles.scrollViewContainer}>
                <View style={EditBookStyles.container}>
                    <InputText placeholder={'Titre'} defaultValue={newBook.title} onChangeText={onChangeTitle}/>
                    <InputText placeholder={'Autheur'} defaultValue={newBook.author} onChangeText={onChangeAuthor}/>
                    <View style={EditBookStyles.inputNumberContainer}>
                        <InputText placeholder={'Page'} containerStyle={EditBookStyles.inputNumber} defaultValue={newBook.numberOP.toString()} keyboardType='numeric' onChangeText={onChangeNumberOP}/>
                        <InputText placeholder={'Note'} containerStyle={EditBookStyles.inputNumber} defaultValue={newBook.notePerso.toString()} keyboardType='numeric' onChangeText={onChangeNotePerso}/>
                    </View>
                    <InputText placeholder={'Année de sortie'} defaultValue={newBook.releaseYear} keyboardType='numeric' onChangeText={onChangeReleaseYear}/>
                    <View style={{width: "100%"}}  >
                        <Text style={EditBookStyles.textHolder}>Tags </Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={EditBookStyles.tagsContainer}>
                            <TextIconButton callBack={() => setShowModal(true)} iconName={'square-edit-outline'} iconColor={COLORS.background} iconSize={17} showText={false} buttonStyle={EditBookStyles.addTagContainer}/>
                            {
                                newBook.tags.map((tag, idTag) => 
                                    <TagSticker key={idTag} tag={tag} navigation={navigation}/>
                                )
                            }
                            <TagsModal book={newBook} showModal={showModal} setShowModal={setShowModal}/>
                        </ScrollView>
                    </View>
                    <InputText placeholder={'Description'} multiline={true} defaultValue={newBook.summary} containerStyle={EditBookStyles.descriptionContainer} onChangeText={onChangeSummary}/>
                    <View style={EditBookStyles.readingsContainer}>
                        <Text style={EditBookStyles.textHolder}>Lectures </Text>
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
    )
}