import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CommonStyles from '../styles/CommonStyles'
import TitleScreen from '../components/TitleScreen'
import AddBookStyles from '../styles/screens/AddBookStyles'
import TopBar from '../components/Inputs/TopBar'
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import TextIconButton from '../components/Buttons/TextIconButton'
import InputText from '../components/Inputs/InputText'
import Spinner from '../components/Inputs/Spinner'

type AddBookStackParamList = {};

export default function AddBookScreen() {
    const navigation = useNavigation<StackNavigationProp<AddBookStackParamList>>();

    const onClickSaveBook = () => {
        navigation.goBack();
    };

    const onClickAddTag = () => {
        alert('Add tag');
    };

    return (
        <View style={CommonStyles.container}>
            <TopBar iconButtonShow={true} searchBarShow={false}/>
            <View style={CommonStyles.content}>
                <TitleScreen title={"Ajouter un livre"}/>
                <ScrollView style={CommonStyles.scrollViewContainer}>
                    <View style={AddBookStyles.container}>
                        <InputText placeholder={'Titre'}/>
                        <InputText placeholder={'Autheur'}/>
                        <View style={AddBookStyles.spinnerContainer}>
                            <Spinner min={0} max={5} step={0.5} value={0} placeholder={'Note : '} skin={'clean'}/>
                            <Spinner min={-2999} max={2999} step={1} value={new Date().getFullYear()} placeholder={'Date : '} skin={'clean'}/>
                        </View>
                        <View style={AddBookStyles.tagsContainer}>
                            <Text style={AddBookStyles.text}>Tags : </Text>
                            <TextIconButton callBack={onClickAddTag} nameIcon={'plus'} size={15} showText={false} containerStyle={AddBookStyles.addTagContainer}/>
                        </View>
                        <InputText placeholder={'Description'} multiline={true} containerStyle={AddBookStyles.descriptionContainer}/>
                        <View style={AddBookStyles.readingsContainer}>
                            <Text style={AddBookStyles.text}>Lectures : </Text>
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