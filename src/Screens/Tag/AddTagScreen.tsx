import { View, ScrollView, ToastAndroid, Text, Modal, Button } from 'react-native'
import React, { useState } from 'react'
import TopBar from '../../components/TopBar';
import CommonStyles from '../../styles/CommonStyles';
import TitleScreen from '../../components/TitleScreen';
import InputText from '../../components/Inputs/InputText';
import TextIconButton from '../../components/Buttons/TextIconButton';
import AddTagStyles from '../../styles/Screens/Tag/AddTagStyles';
import TagBuilder from '../../library/builders/TagBuilder';
import ColorPicker from 'react-native-wheel-color-picker';
import ColorModal from '../../components/Modals/ColorModal';

export default function AddTagScreen({ navigation, route } : any) {

    const tag:TagBuilder = route.params.tag;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showModal, setShowModal] = useState(false);

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
    }

    const onChangeTextTag = (text: string) => {
        tag.setTextTag(text);
    }

    return (
        <View style={CommonStyles.container}>
            <TopBar iconButtonShow={true} searchBarShow={false}/>
            <View style={CommonStyles.titleScrollView}>
                <TitleScreen title={"Ajouter un tag"}/>
            </View>
            <ScrollView style={CommonStyles.scrollViewContainer}>
                <View style={AddTagStyles.container}>
                    <InputText placeholder={'Titre du tag'} defaultValue={tag.textTag} onChangeText={onChangeTextTag}/>
                    <View style={AddTagStyles.colorContainer}>
                        <Text style={AddTagStyles.textHolder}>Couleur du tag :</Text>
                        <TextIconButton showText={false} showIcon={false}  buttonStyle={[{backgroundColor: tag.colorTag}, AddTagStyles.colorTag]} callBack={() => setShowModal(true)}/>
                        <ColorModal setShowModal={setShowModal} showModal={showModal} tag={tag}/>
                    </View>
                </View>
            </ScrollView>
            <TextIconButton callBack={onClickSaveTag} isLoading={isLoading} text={'Enregistrer'} showIcon={false} buttonStyle={AddTagStyles.button}/>
        </View>
    )
}