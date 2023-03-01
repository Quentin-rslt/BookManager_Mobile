import { TextInput, View } from 'react-native'
import SearchBarStyles from '../../styles/components/Inputs/SearchBarStyles'
import { COLORS } from '../../Common/CommonColors';

type Props = {
    onChangeSearch: (text: string) => void;
}

export default function SearchBar({onChangeSearch} : Props) {
    return (
        <View style={SearchBarStyles.container}>
            <TextInput placeholder="Search" placeholderTextColor={COLORS.foregroundHolder}  style={SearchBarStyles.textInput} onChangeText={onChangeSearch}/>
        </View>
  )
}

