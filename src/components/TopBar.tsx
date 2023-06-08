import { TextInput, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../library/CommonColors';
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import TopBarStyles from '../styles/components/TopBarStyles';
import TextIconButton from './Buttons/TextIconButton';
import { Feather } from '@expo/vector-icons';

type Props = {
    onChangeSearch?: (text: string) => void;
    returnButtonShow?: boolean;
    searchBarShow?: boolean;
    moreButtonShow?: boolean;
    onClickButtonMore?: () => void;
}

type TopBarStackParamList = {};

export default function TopBar({onChangeSearch, onClickButtonMore, moreButtonShow = false, returnButtonShow = false, searchBarShow = true} : Props) {
    const navigation = useNavigation<StackNavigationProp<TopBarStackParamList>>();

    return (
        <View style={TopBarStyles.container}>
            {
                returnButtonShow && 
                <View style={TopBarStyles.returnButtonContainer}>
                    <TextIconButton callBack={() => navigation.goBack()} iconSize={35} iconName={'chevron-left'} iconColor={COLORS.foregroundHolder} buttonStyle={TopBarStyles.returnButton}/>
                </View>
            }
            {
                searchBarShow && <TextInput placeholder="Search" placeholderTextColor={COLORS.foregroundHolder}  style={TopBarStyles.textInput} onChangeText={onChangeSearch}/>
            }
            {
                moreButtonShow && onClickButtonMore &&
                <TouchableOpacity onPress={onClickButtonMore} style={TopBarStyles.moreButtonContainer}>
                    <Feather name={'more-vertical'} size={27} color={COLORS.accentColor}/>
                </TouchableOpacity>

            }
        </View>
  )
}

