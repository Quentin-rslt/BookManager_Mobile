import { View, ScrollView, ToastAndroid, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import TopBar from '../../components/TopBar';
import CommonStyles from '../../styles/CommonStyles';
import TitleScreen from '../../components/TitleScreen';
import InputText from '../../components/Inputs/InputText';
import TextIconButton from '../../components/Buttons/TextIconButton';
import AddTagStyles from '../../styles/Screens/Tag/AddTagStyles';
import TagBuilder from '../../library/builders/TagBuilder';
import ColorPicker from 'react-native-wheel-color-picker';
import { createErrorHandler } from 'expo/build/errors/ExpoErrorManager';

export default function AddTagScreen({ navigation, route } : any) {

    const tag:TagBuilder = route.params.tag;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [colorTag, setColorTag] = useState(tag.colorTag);

    const onClickSaveTag = async () => {
        setIsLoading(true);

        try{
            if(tag.textTag != ""){
                await tag.client.tagService.createTag(tag);
                
                navigation.goBack();
            } else {
                ToastAndroid.show("Veuillez titre pour le tag" , ToastAndroid.CENTER);
            }
        } catch(error) {
            ToastAndroid.show("Problème lors de la création d'un tag" , ToastAndroid.CENTER);
        }

        setIsLoading(false);
    };

    const onChangeTextTag = (text: string) => {
        tag.setTextTag(text);
    };

    const validateColor = (color:string) => {
        const regex =  /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
        return regex.test(color);
    };

    const onChangeTextColorTag = (text: string) => {
        if(validateColor(text) && text.length === 7){
            setColorTag(text);
        }
    };

    const onSelectColor = ( hex: any ) => {
        setColorTag(hex);
        tag.setColorTag(hex);
    };

    return (
        <View style={CommonStyles.container}>
            <TopBar iconButtonShow={true} searchBarShow={false}/>
            <View style={AddTagStyles.titleScrollView}>
                <TitleScreen title={"Ajouter un tag"}/>
            </View>
            <ScrollView style={CommonStyles.scrollViewContainer}>
                <View style={AddTagStyles.container}>
                    <InputText placeholder={'Titre du tag'} defaultValue={tag.textTag} onChangeText={onChangeTextTag}/>
                    <View style={AddTagStyles.colorContainer}>
                        <View style={AddTagStyles.resultColorContainer}>
                            <Text style={AddTagStyles.textHolder}>Couleur du tag :</Text>
                            <View style={[{backgroundColor: colorTag}, AddTagStyles.colorTag]}/>
                        </View>
                        <ColorPicker
                            color = {colorTag}
                            swatches = {false}
                            onColorChange = {onSelectColor}
                            thumbSize={20}
                            sliderSize={30}
                            noSnap={false}
                            row={false}
                        />
                        <TextInput defaultValue={colorTag} onChangeText={onChangeTextColorTag} style={AddTagStyles.textColorTag} maxLength={7}/>
                    </View>
                </View>
            </ScrollView>
            <TextIconButton callBack={onClickSaveTag} isLoading={isLoading} text={'Enregistrer'} showIcon={false} buttonStyle={AddTagStyles.button}/>
        </View>
    )
}