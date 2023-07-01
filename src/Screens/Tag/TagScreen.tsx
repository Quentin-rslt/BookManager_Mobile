import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import Tag from '../../library/class/Tag';
import TagStyles from '../../styles/Screens/Tag/TagStyles';
import BookCard from '../../components/cards/book/BookCard';
import TopBar from '../../components/TopBar';
import EditTagModal from '../../components/Modals/EditTagModal';
import CommonStyles from '../../styles/CommonStyles';

export default function TagScreen({ navigation, route } : any) {

    const tag:Tag = route.params.tag;

    const [showModal, setShowModal] = useState<boolean>(false);
    const [books, setBooks] = useState(Array.from(tag.getBooks().values()));

    useEffect(() => {
        navigation.addListener('focus', () => {
            onRefresh();
        });
    }, [navigation]);

    const onRefresh = () => {
        const books = tag.getBooks().values();
        setBooks([...Array.from(books)]);
    };

    const onClickMoreButton = () => {
        setShowModal(true);
    };

    return (
        <View style={CommonStyles.container}>
            <TopBar returnButtonShow moreButtonShow searchBarShow={false} onClickButtonMore={onClickMoreButton}/>
            <ScrollView style={TagStyles.scrollViewContainer} showsVerticalScrollIndicator={false}>
                <Text style={TagStyles.textTag}>{tag.textTag}</Text>
                <View style={TagStyles.colorContainer}>
                    <Text style={TagStyles.textHolder}>Couleur </Text>
                    <View style={[{backgroundColor: tag.colorTag}, TagStyles.colorTag]}></View>
                </View>
                {   
                    books.length !== 0 &&
                    <View style={TagStyles.booksContainer}>
                        <Text style={TagStyles.textHolder}>Livres ({tag.books.size.toString()})</Text>
                        {
                            books.map((book, idBook) => 
                                <BookCard key={idBook} book={book} navigation={navigation} onRefresh={onRefresh}/>
                            )
                        }
                    </View>
                }
            </ScrollView>
            <EditTagModal navigation={navigation} showModal={showModal} setShowModal={setShowModal} newTag={tag} />
        </View>
    )
}