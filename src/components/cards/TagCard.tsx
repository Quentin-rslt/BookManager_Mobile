import { Text, TouchableOpacity, View } from 'react-native'
import NumberIcon from '../NumberIcon';
import TagCardStyles from '../../styles/components/Cards/TagCardStyles';
import { useState } from 'react';
import Tag from '../../Common/Class/Tag';
import TagModal from '../Modals/TagModal';

type Props = {
    tag: Tag;
    onRefresh: () => Promise<void>;
}

export default function TagCard({tag, onRefresh} : Props) {

    const [showModal, setShowModal] = useState<boolean>(false);

    return (
        <TouchableOpacity style={TagCardStyles.container} onPress={() => setShowModal(true)}>
            <View style={TagCardStyles.containerButton}>
                <Text style={TagCardStyles.text} numberOfLines={1}>{tag.textTag}</Text>
                <View style={TagCardStyles.numberBook}>
                    <NumberIcon iconNumber={tag.books.size} iconName={"book-open-outline"} />
                </View>
            </View>
            <TagModal tag={tag} showModal={showModal} setShowModal={setShowModal} onRefresh={onRefresh}/>
        </TouchableOpacity>
    )
}