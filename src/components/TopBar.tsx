import { TextInput, TouchableOpacity, View, Text } from 'react-native'
import { COLORS } from '../library/CommonColors';
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import TopBarStyles from '../styles/components/TopBarStyles';
import TextIconButton from './Buttons/TextIconButton';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';

type Props = {
    onChangeSearch?: (text: string) => void;
    returnButtonShow?: boolean;
    searchBarShow?: boolean;
    value?: string;
    moreButtonShow?: boolean;
    onClickButtonMore?: () => void;
    saveButtonShow?: boolean;
    onClickSaveButton?: () => void;
    isLoadingSaveButton?: boolean;
    headerShow?: boolean;
    titleHeader?: string;
    iconNameButtonHeader?: any;
    iconNameTitleHeader?: any;
    onClickButtonHeader?: () => void;
}

type TopBarStackParamList = {};

export default function TopBar({onChangeSearch, onClickButtonMore, onClickSaveButton, onClickButtonHeader, headerShow = false , iconNameTitleHeader = '', iconNameButtonHeader = '' , titleHeader = '', isLoadingSaveButton = false, saveButtonShow = false, moreButtonShow = false, returnButtonShow = false, searchBarShow = true, value = ''} : Props) {
    const navigation = useNavigation<StackNavigationProp<TopBarStackParamList>>();

    return (
        <View style={{width: '100%'}}>
            {
                onClickButtonHeader && headerShow && 
                <View style={TopBarStyles.topContainer}>
                    <View style={TopBarStyles.textHeaderContainer}>
                        <MaterialCommunityIcons name={iconNameTitleHeader} color={COLORS.accentColor} size={30}/>
                        <Text style={TopBarStyles.textHeader}>{titleHeader}</Text>
                    </View>
                    <TextIconButton callBack={onClickButtonHeader} iconSize={30} showText={false} buttonStyle={TopBarStyles.buttonHeader} iconName={iconNameButtonHeader} iconColor={COLORS.foreground}/>
                </View>
            }
            {
                <View style={[TopBarStyles.bottomContainer, !headerShow && {marginTop: 45, marginBottom: 20}]}>
                    {
                        returnButtonShow && 
                        <View style={TopBarStyles.returnButtonContainer}>
                            <TextIconButton callBack={() => navigation.goBack()} iconSize={30} iconName={'chevron-left'} iconColor={COLORS.foreground} buttonStyle={TopBarStyles.returnButton}/>
                        </View>
                    }
                    {
                        searchBarShow && <TextInput value={value} placeholder="Search" placeholderTextColor={COLORS.foregroundHolder}  style={TopBarStyles.textInput} onChangeText={onChangeSearch}/>
                    }
                    {
                        moreButtonShow && onClickButtonMore &&
                        <TouchableOpacity onPress={onClickButtonMore} style={TopBarStyles.moreButtonContainer}>
                            <Feather name={'more-vertical'} size={25} color={COLORS.accentColor}/>
                        </TouchableOpacity>
                    }
                    {
                        saveButtonShow && onClickSaveButton && 
                        <TextIconButton callBack={onClickSaveButton} isLoading={isLoadingSaveButton} text='Enregistrer' buttonStyle={TopBarStyles.saveButton} textStyle={TopBarStyles.textSaveButton}/>
                    }
                </View>
            }
        </View>
  )
}

