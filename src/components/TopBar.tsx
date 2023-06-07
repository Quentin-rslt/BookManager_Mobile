import { TextInput, View } from 'react-native'
import { COLORS } from '../library/CommonColors';
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import TopBarStyles from '../styles/components/TopBarStyles';
import TextIconButton from './Buttons/TextIconButton';

type Props = {
    onChangeSearch ?: (text: string) => void;
    iconButtonShow ?: boolean;
    searchBarShow ?: boolean;
}

type TopBarStackParamList = {};

export default function TopBar({onChangeSearch, iconButtonShow=false, searchBarShow= true} : Props) {
    const navigation = useNavigation<StackNavigationProp<TopBarStackParamList>>();

    return (
        <View style={TopBarStyles.container}>
            {
                iconButtonShow && 
                <View style={TopBarStyles.returnButtonContainer}>
                    <TextIconButton callBack={() => navigation.goBack()} iconSize={24} text={' Retour '} textStyle={TopBarStyles.textReturn} iconName={'arrow-left'} iconColor={COLORS.foregroundHolder} buttonStyle={TopBarStyles.returnButton}/>
                </View>
            }
            {
                searchBarShow && <TextInput placeholder="Search" placeholderTextColor={COLORS.foregroundHolder}  style={TopBarStyles.textInput} onChangeText={onChangeSearch}/>
            }
        </View>
  )
}

