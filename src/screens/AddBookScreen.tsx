import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CommonStyles from '../styles/CommonStyles'
import TitleScreen from '../components/TitleScreen'
import AddBookStyles from '../styles/screens/AddBookStyles'
import TopBar from '../components/Inputs/TopBar'
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import TextIconButton from '../components/Buttons/TextIconButton'
import InputText from '../components/Inputs/InputText'
import ReadingCard from '../components/cards/ReadingCard'
import Reading from '../Common/Class/Reading' 
import Tag from '../Common/Class/Tag'
import TagSticker from '../components/TagSticker'
import DatePicker from '../components/Buttons/DatePicker'
import Book from '../Common/Class/Book'
import { createBook } from '../Common/services/BookService'
import { LogBox } from 'react-native';
import Spinner from '../components/Inputs/Spinner'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

type AddBookStackParamList = {};

export default function AddBookScreen() {
    const navigation = useNavigation<StackNavigationProp<AddBookStackParamList>>();

    const [title, setTitle] = useState<string>("");
    const [author, setAuthor] = useState<string>("");
    const [numberOP, setNumberOP] = useState<number>(0);
    const [notePerso, setNotePerso] = useState<number>(0);
    const [releaseYear, setReleaseYear] = useState<string>("2023");
    const [summary, setSummary] = useState<string>("");
    const [tags, setTags] = useState<Tag[]>([]);
    const [readings, setReadings] = useState<Reading[]>([]);

    const [textTag, setTextTag] = useState<string>("Fantasy");

    

    const onClickSaveBook = async () => {
        if(title != "" && author != ""){
            const newBook:Book = new Book(title, author, numberOP, notePerso, releaseYear, summary, readings, tags, 0);
            const data = newBook.toJSON();
            await createBook(JSON.stringify(data));
    
            navigation.goBack();
        } else {
            alert("Veuillez mettre un titre et un author");
        }
    };

    const onClickAddTag = () => {
        tags.push(new Tag(textTag, 0));
        const newTags = Array.from(tags);
        setTags(newTags);
    };    

    const onChangeTitle = (text : string) => {
        setTitle(text);
    }

    const onChangeAuthor = (text : string) => {
        setAuthor(text);
    }

    const onChangeSummary = (text : string) => {
        setSummary(text);
    }

    return (
        <View style={CommonStyles.container}>
            <TopBar iconButtonShow={true} searchBarShow={false}/>
            <View style={CommonStyles.content}>
                <TitleScreen title={"Ajouter un livre"}/>
                <ScrollView style={CommonStyles.scrollViewContainer}>
                    <View style={AddBookStyles.container}>
                        <InputText placeholder={'Titre'} onChangeText={onChangeTitle}/>
                        <InputText placeholder={'Autheur'} onChangeText={onChangeAuthor}/>
                        <View style={AddBookStyles.spinnerContainer}>
                            <Spinner max={9999999} min={0} step={1} value={numberOP} skin={'clean'} placeholder={'Nombre de page: '} onChange={(num:number) => {setNumberOP(num)}}/>
                            <Spinner max={5} min={0} step={0.5} value={notePerso} skin={'clean'} placeholder={'Note personnelle: '} onChange={(num:number) => {setNotePerso(num)}}/>
                            <Spinner max={new Date().getFullYear()} min={0} step={1} value={releaseYear} skin={'clean'} placeholder={'Date de sortie : '} onChange={(num:string) => {setReleaseYear(num)}}/>
                        </View>
                        <View style={AddBookStyles.tagsContainer}>
                            <Text style={AddBookStyles.text}>Tags : </Text>
                            <ScrollView horizontal>
                                {
                                    tags.map((tag, idTag) => 
                                        <TagSticker key={idTag} text={tag.textTag}/>
                                    )
                                }
                                <TextIconButton callBack={onClickAddTag} nameIcon={'plus'} size={15} showText={false} containerStyle={AddBookStyles.addTagContainer}/>
                            </ScrollView>
                        </View>
                        <InputText placeholder={'Description'} multiline={true} containerStyle={AddBookStyles.descriptionContainer} onChangeText={onChangeSummary}/>
                        <View style={AddBookStyles.readingsContainer}>
                            <Text style={AddBookStyles.text}>Lectures : </Text>
                            <DatePicker readings={readings} setReadings={setReadings }/>
                            {
                                readings.map((reading, idReading) => 
                                    <ReadingCard key={idReading} reading={reading} showDeleteButton={true} setReadings={setReadings} readings={readings} idReading={idReading}/>
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