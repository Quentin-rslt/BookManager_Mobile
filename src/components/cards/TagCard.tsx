import { Text, View } from 'react-native'
import Tag from '../../Common/types/tag';
import NumberIcon from './../NumberIcon';
import TagCardStyles from '../../styles/components/cards/TagCardStyles';
import { getBooksByTag } from '../../Common/services/BookService';
import { useEffect, useState } from 'react';
import Book from '../../Common/types/book';

type Props = {
    tag: Tag;
}

export default function TagCard({tag} : Props) {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        getBooksByTag(tag).then(books => {setBooks([...books])});
    }, [])

    return (
        <View>
            <View style={TagCardStyles.container}>
                <Text style={TagCardStyles.text} numberOfLines={1}>{tag.textTag}</Text>
                <View style={TagCardStyles.numberBook}>
                    <NumberIcon number={books.length} nameIcon={"book-open-outline"} />
                </View>
            </View>
        </View>
    )
}