import { Text, TouchableOpacity, View } from 'react-native'
import NumberIcon from '../NumberIcon';
import TagCardStyles from '../../styles/components/cards/TagCardStyles';
import { useState } from 'react';
import Tag from '../../library/class/Tag';
import TagModal from '../Modals/TagModal';
import { COLORS } from '../../library/CommonColors';

type Props = {
    tag: Tag;
    onRefresh: () => Promise<void>;
    navigation: any;
}

export default function TagCard({tag, onRefresh, navigation} : Props) {

    const [showModalTag, setShowModalTag] = useState<boolean>(false);

    return (
        <TouchableOpacity style={TagCardStyles.container} onPress={() => setShowModalTag(true)}>
            <View style={TagCardStyles.containerButton}>
                <Text style={TagCardStyles.text} numberOfLines={1}>{tag.textTag}</Text>
                <View style={TagCardStyles.numberBook}>
                    <NumberIcon iconNumber={tag.books.size} iconName={"book-open-outline"} iconColor={COLORS.foregroundHolder}/>
                </View>
            </View>
            <TagModal tag={tag} showModalTag={showModalTag} setShowModalTag={setShowModalTag} onRefresh={onRefresh} navigation={navigation}/>
        </TouchableOpacity>
    )
}