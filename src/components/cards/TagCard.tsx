import { Text, TouchableOpacity, View } from 'react-native'
import NumberIcon from '../NumberIcon';
import TagCardStyles from '../../styles/components/cards/TagCardStyles';
import { useState } from 'react';
import Tag from '../../library/class/Tag';
import TagModal from '../Modals/TagModal';
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
        <TouchableOpacity style={TagCardStyles.container} onPress={onClickTagCard}>
            <View style={TagCardStyles.containerButton}>
                <Text style={TagCardStyles.text} numberOfLines={1}>{tag.textTag}</Text>
                <View style={TagCardStyles.numberBook}>
                    <View style={[{backgroundColor: tag.colorTag}, TagCardStyles.colorTag]}/>
                    <NumberIcon iconNumber={tag.books.size} iconName={"book-open-outline"} iconColor={COLORS.foregroundHolder}/>
                </View>
            </View>
        </TouchableOpacity>
    )
}