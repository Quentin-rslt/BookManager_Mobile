import { Text, TouchableOpacity, View } from 'react-native'
import NumberIcon from '../../NumberIcon';
import TagMostUseCardStyles from '../../../styles/components/cards/tag/TagMostUseCardStyles';
import Tag from '../../../library/class/Tag';
import { COLORS } from '../../../library/CommonColors';

type Props = {
    tag: Tag;
    navigation: any;
}

export default function TagMostUseCard({tag, navigation} : Props) {

    const onClickTagCard =() => {
        navigation.navigate('TagScreen', { tag });
    };

    return (
        <TouchableOpacity style={[TagMostUseCardStyles.container, {backgroundColor: tag.colorTag}]} onPress={onClickTagCard}>
            <View style={TagMostUseCardStyles.containerButton}>
                <Text style={TagMostUseCardStyles.text} numberOfLines={1}>{tag.textTag}</Text>
                <View style={TagMostUseCardStyles.numberBook}>
                    <NumberIcon iconNumber={tag.books.size} iconName={"book-open-outline"} iconColor={COLORS.foreground}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}