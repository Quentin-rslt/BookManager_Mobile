import { Text, View } from 'react-native'
import Tag from '../Common/types/tag';
import NumberIcon from './NumberIcon';
import TagCardStyles from '../styles/components/TagCardStyles';
import { getBooksByTag } from '../Common/services/BookService';

type Props = {
    tag: Tag;
}

export default function TagCard({tag} : Props) {
    return (
        <View>
            <View style={TagCardStyles.container}>
                <Text style={TagCardStyles.text} numberOfLines={1}>{tag.textTag}</Text>
                <View style={TagCardStyles.numberBook}>
                    <NumberIcon number={getBooksByTag(tag.idTag).length} nameIcon={"book-open-outline"} />
                </View>
            </View>
        </View>
    )
}