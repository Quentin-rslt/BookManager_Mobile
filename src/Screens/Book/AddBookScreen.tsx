import { View, Text, ScrollView, ToastAndroid } from 'react-native'
import { useState } from 'react'
import CommonStyles from '../../styles/CommonStyles'
import AddBookStyles from '../../styles/Screens/Book/AddBookStyles'
import TextIconButton from '../../components/Buttons/TextIconButton'
import InputText from '../../components/Inputs/InputText'
import ReadingCard from '../../components/cards/ReadingCard'
import TagSticker from '../../components/Buttons/TagSticker'
import DatePicker from '../../components/Buttons/DatePicker'
import { LogBox } from 'react-native';
import TagsModal from '../../components/Modals/TagsModal'
import BookBuilder from '../../library/builders/BookBuilder'
import TopBar from '../../components/TopBar'
import { COLORS } from '../../library/CommonColors'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function AddBookScreen({ navigation, route } : any) {

    const book:BookBuilder = route.params.book;

    const [refresh, setRefresh] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);

    const onClickSaveBook = async () => {
        setIsLoading(true);
        
        try{
            if(book.title != "" && book.author != ""){
                await book.client.bookService.createBook(book);
 
                navigation.goBack();
            } else {
                ToastAndroid.show("Veuillez mettre un titre et un author" , ToastAndroid.CENTER);
            }
        } catch(error) {
            ToastAndroid.show("Problème lors de la création d'un livre" , ToastAndroid.CENTER);
        }

        setIsLoading(false);
    };

    const onChangeTitle = (text : string) => {
        book.setTitle(text);
    };

    const onChangeAuthor = (text : string) => {
        book.setAuthor(text);
    };

    const onChangeSummary = (text : string) => {
        book.setSummary(text);
    };

    const onChangeNumberOP = (text : string) => {
        book.setNumberOP(+text);
    };

    const onChangeNotePerso = (text : string) => {
        book.setNotePerso(+text);
    };

    const onChangeReleaseYear = (text : string) => {
        book.setReleaseYear(text);
    };

    return (
        <View style={CommonStyles.container}>
            <TopBar returnButtonShow searchBarShow={false} saveButtonShow onClickSaveButton={onClickSaveBook} isLoadingSaveButton={isLoading}/>
            <ScrollView style={CommonStyles.scrollViewContainer}>
                <View style={AddBookStyles.container}>
                    <InputText placeholder={'Titre'} defaultValue={book.title} onChangeText={onChangeTitle}/>
                    <InputText placeholder={'Autheur'} defaultValue={book.author} onChangeText={onChangeAuthor}/>
                    <View style={AddBookStyles.inputNumberContainer}>
                        <InputText placeholder={'Page'} containerStyle={AddBookStyles.inputNumber} defaultValue={book.numberOP.toString()} keyboardType='numeric' onChangeText={onChangeNumberOP}/>
                        <InputText placeholder={'Note'} containerStyle={AddBookStyles.inputNumber} defaultValue={book.notePerso.toString()} keyboardType='numeric' onChangeText={onChangeNotePerso}/>
                    </View>
                    <InputText placeholder={'Année de sortie'} defaultValue={book.releaseYear} keyboardType='numeric' onChangeText={onChangeReleaseYear}/>
                    <View style={{width: "100%"}}>
                        <Text style={AddBookStyles.textHolder}>Tags : </Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={AddBookStyles.tagsContainer}>
                            <TextIconButton callBack={() => setShowModal(true)} iconColor={COLORS.background} iconName={'square-edit-outline'} iconSize={17} showText={false} buttonStyle={AddBookStyles.addTagContainer}/>
                            {
                                book.tags.map((tag, idTag) => 
                                    <TagSticker key={idTag} tag={tag} navigation={navigation}/>
                                )
                            }
                            <TagsModal book={book} showModal={showModal} setShowModal={setShowModal}/>
                        </ScrollView>
                    </View>
                    <InputText placeholder={'Description'} multiline={true} containerStyle={AddBookStyles.descriptionContainer} onChangeText={onChangeSummary}/>
                    <View style={AddBookStyles.readingsContainer}>
                        <Text style={AddBookStyles.textHolder}>Lectures : </Text>
                        <DatePicker book={book} setRefresh={setRefresh} refresh={refresh}/>
                        {
                            book.readings.map((reading, idReading) => 
                                <ReadingCard key={idReading} reading={reading} showDeleteButton={true} idReading={idReading} book={book} setRefresh={setRefresh} refresh={refresh}/>
                            )
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}