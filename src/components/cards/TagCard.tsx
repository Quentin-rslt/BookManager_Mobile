import { Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import NumberIcon from '../NumberIcon';
import TagCardStyles from '../../styles/components/Cards/TagCardStyles';
import { useCallback, useEffect, useState } from 'react';
import Tag from '../../Common/Class/Tag';
import BookService from '../../Common/services/BookService';
import Client from '../../Common/Class/Client';

type Props = {
    tag: Tag;
}

export default function TagCard({tag} : Props) {

    const onClickTagCard = () => {
        alert(tag.textTag)
    }

    return (
        <TouchableOpacity style={TagCardStyles.container} onPress={onClickTagCard}>
            <Text style={TagCardStyles.text} numberOfLines={1}>{tag.textTag}</Text>
            <View style={TagCardStyles.numberBook}>
                <NumberIcon iconNumber={tag.books.length} iconName={"book-open-outline"} />
            </View>
        </TouchableOpacity>
    )
}