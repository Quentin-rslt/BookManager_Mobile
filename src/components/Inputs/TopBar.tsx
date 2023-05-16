import { TextInput, View } from 'react-native'
import TopBarStyles from '../../styles/components/Inputs/TopBarStyles'
import { COLORS } from '../../Common/CommonColors';
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import TextIconButton from '../Buttons/TextIconButton';

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
                    <TextIconButton callBack={() => navigation.goBack()} iconSize={24} text={' Retour '} iconName={'arrow-left-top'} iconColor={COLORS.background} buttonStyle={TopBarStyles.returnButton}/>
                </View>
            }
            {
                searchBarShow && <TextInput placeholder="Search" placeholderTextColor={COLORS.foregroundHolder}  style={TopBarStyles.textInput} onChangeText={onChangeSearch}/>
            }
        </View>
  )
}

