import { View, ScrollView, ToastAndroid, Text, TextInput } from 'react-native'
import { useState } from 'react'
import TopBar from '../../components/TopBar';
import CommonStyles from '../../styles/CommonStyles';
import TitleScreen from '../../components/TitleScreen';
import InputText from '../../components/Inputs/InputText';
import TextIconButton from '../../components/Buttons/TextIconButton';
import EditTagStyles from '../../styles/Screens/Tag/EditTagStyles';
import TagBuilder from '../../library/builders/TagBuilder';
import ColorPicker from 'react-native-wheel-color-picker';

export default function AddTagScreen({ navigation, route } : any) {

    const newTag:TagBuilder = route.params.newTag;

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [colorTag, setColorTag] = useState(newTag.colorTag);

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
        newTag.setColorTag(hex);
    };

    return (
        <View style={CommonStyles.container}>
            <TopBar returnButtonShow={true} searchBarShow={false}/>
            <View style={EditTagStyles.titleScrollView}>
                <TitleScreen title={"Modifier un tag"}/>
            </View>
            <ScrollView style={CommonStyles.scrollViewContainer}>
                <View style={EditTagStyles.container}>
                    <InputText placeholder={'Titre du tag'} defaultValue={newTag.textTag} onChangeText={onChangeTextTag}/>
                    <View style={EditTagStyles.colorContainer}>
                        <View style={EditTagStyles.resultColorContainer}>
                            <Text style={EditTagStyles.textHolder}>Couleur du tag :</Text>
                            <View style={[{backgroundColor: colorTag}, EditTagStyles.colorTag]}/>
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
                        <TextInput defaultValue={colorTag} onChangeText={onChangeTextColorTag} style={EditTagStyles.textColorTag} maxLength={7}/>
                    </View>
                </View>
            </ScrollView>
            <TextIconButton callBack={onClickSaveTag} isLoading={isLoading} text={'Enregistrer'} showIcon={false} buttonStyle={EditTagStyles.button}/>
        </View>
    )
}