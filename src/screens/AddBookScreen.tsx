import { View, Text, ScrollView, ToastAndroid } from 'react-native'
import React, { useState } from 'react'
import CommonStyles from '../styles/CommonStyles'
import TitleScreen from '../components/TitleScreen'
import AddBookStyles from '../styles/screens/AddBookStyles'
import TopBar from '../components/Inputs/TopBar'
import TextIconButton from '../components/Buttons/TextIconButton'
import InputText from '../components/Inputs/InputText'
import ReadingCard from '../components/cards/ReadingCard'
import Tag from '../Common/Class/Tag'
import TagSticker from '../components/Buttons/TagSticker'
import DatePicker from '../components/Buttons/DatePicker'
import Book from '../Common/Class/Book'
import { createBook } from '../Common/services/BookService'
import { LogBox } from 'react-native';
import Spinner from '../components/Inputs/Spinner'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function AddBookScreen({ navigation, route } : any) {

    const newBook:Book = route.params.newBook;

    const [refresh, setRefresh] = useState<boolean>(false);

    const onClickSaveBook = async () => {
        try{
            if(newBook.title != "" && newBook.author != ""){
                const data = newBook.toJSON();
                await createBook(JSON.stringify(data));
        
                navigation.goBack();
            } else {
                ToastAndroid.show("Veuillez mettre un titre et un author" , ToastAndroid.CENTER);
            }
        } catch(error) {
            ToastAndroid.show("Problème lors de la création d'un livre" , ToastAndroid.CENTER);
        }
    };

    const onClickAddTag = () => {
        newBook.addTag(new Tag("Fantasy", 0, 0));
        setRefresh(!refresh);
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

    return (
        <View style={CommonStyles.container}>
            <TopBar iconButtonShow={true} searchBarShow={false}/>
            <View style={CommonStyles.content}>
                <ScrollView style={CommonStyles.scrollViewContainer}>
                    <TitleScreen title={"Ajouter un livre"}/>
                    <View style={AddBookStyles.container}>
                        <InputText placeholder={'Titre'} onChangeText={onChangeTitle}/>
                        <InputText placeholder={'Autheur'} onChangeText={onChangeAuthor}/>
                        <View style={AddBookStyles.inputNumberContainer}>
                            <InputText placeholder={'Page'} containerStyle={AddBookStyles.inputNumber} keyboardType='numeric' onChangeText={onChangeNumberOP}/>
                            <InputText placeholder={'Note'} containerStyle={AddBookStyles.inputNumber} keyboardType='numeric' onChangeText={onChangeNotePerso}/>
                        </View>
                        <View style={AddBookStyles.spinnerContainer}>
                            <Spinner max={new Date().getFullYear()} min={0} step={1} value={newBook.releaseYear} skin={'clean'} placeholder={'Date de sortie : '} onChange={(num:string) => {newBook.setReleaseYear(num)}}/>
                        </View>
                        <View style={AddBookStyles.tagsContainer}>
                            <Text style={AddBookStyles.text}>Tags : </Text>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                {
                                    newBook.tags.map((tag, idTag) => 
                                        <TagSticker key={idTag} tag={tag}/>
                                    )
                                }
                                <TextIconButton callBack={onClickAddTag} nameIcon={'plus'} size={15} showText={false} containerStyle={AddBookStyles.addTagContainer}/>
                            </ScrollView>
                        </View>
                        <InputText placeholder={'Description'} multiline={true} containerStyle={AddBookStyles.descriptionContainer} onChangeText={onChangeSummary}/>
                        <View style={AddBookStyles.readingsContainer}>
                            <Text style={AddBookStyles.text}>Lectures : </Text>
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
            <View style={AddBookStyles.saveButtonContainer}>
                <TextIconButton callBack={onClickSaveBook} text={'Enregistrer'} showIcon={false} containerStyle={AddBookStyles.textSaveButton}/>
            </View>
        </View>
    )
}