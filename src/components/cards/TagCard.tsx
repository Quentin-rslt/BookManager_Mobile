import { Text, TouchableOpacity, View } from 'react-native'
import NumberIcon from '../NumberIcon';
import TagCardStyles from '../../styles/components/cards/TagCardStyles';
import Tag from '../../library/class/Tag';
import { COLORS } from '../../library/CommonColors';

type Props = {
    tag: Tag;
    navigation: any;
}

export default function TagCard({tag, navigation} : Props) {

    const onClickTagCard =() => {
        navigation.navigate('TagScreen', { tag });
    };

    return (
        <TouchableOpacity style={[TagCardStyles.container, {backgroundColor: tag.colorTag}]} onPress={onClickTagCard}>
            <View style={TagCardStyles.containerButton}>
                <Text style={TagCardStyles.text} numberOfLines={1}>{tag.textTag}</Text>
                <View style={TagCardStyles.numberBook}>
                    <NumberIcon iconNumber={tag.books.size} iconName={"book-open-outline"} iconColor={COLORS.foreground}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}