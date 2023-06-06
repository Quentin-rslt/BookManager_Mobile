import { View, ScrollView, ToastAndroid, Text } from 'react-native'
import { useState } from 'react'
import TopBar from '../../components/TopBar';
import CommonStyles from '../../styles/CommonStyles';
import TitleScreen from '../../components/TitleScreen';
import InputText from '../../components/Inputs/InputText';
import TextIconButton from '../../components/Buttons/TextIconButton';
import EditTagStyles from '../../styles/Screens/Tag/EditTagStyles';
import TagBuilder from '../../library/builders/TagBuilder';

export default function AddTagScreen({ navigation, route } : any) {

    const newTag:TagBuilder = route.params.newTag;

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onClickSaveTag = async () => {
        setIsLoading(true);

        try{
            if(newTag.textTag != ""){
                await newTag.client.tagService.editTag(newTag);
                
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
        newTag.setTextTag(text);
    }

    return (
        <View style={CommonStyles.container}>
            <TopBar iconButtonShow={true} searchBarShow={false}/>
            <View style={CommonStyles.titleScrollView}>
                <TitleScreen title={"Modifier un tag"}/>
            </View>
            <ScrollView style={CommonStyles.scrollViewContainer}>
                <View style={EditTagStyles.container}>
                    <InputText placeholder={'Titre du tag'} defaultValue={newTag.textTag} onChangeText={onChangeTextTag}/>
                    <View style={EditTagStyles.colorContainer}>
                        <Text style={EditTagStyles.textHolder}>Couleur du tag :</Text>
                        <View style={[{backgroundColor: newTag.colorTag}, EditTagStyles.colorTag]}></View>
                    </View>
                </View>
            </ScrollView>
            <TextIconButton callBack={onClickSaveTag} isLoading={isLoading} text={'Enregistrer'} showIcon={false} buttonStyle={EditTagStyles.button}/>
        </View>
    )
}