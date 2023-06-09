import { View, Text, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Tag from '../../library/class/Tag';
import TagStyles from '../../styles/Screens/Tag/TagStyles';
import BookCard from '../../components/cards/BookCard';
import TopBar from '../../components/TopBar';
import EditTagModal from '../../components/Modals/EditTagModal';
import CommonStyles from '../../styles/CommonStyles';

export default function TagScreen({ navigation, route } : any) {

    const tag:Tag = route.params.tag;

    const [showModal, setShowModal] = useState<boolean>(false);

    const onClickMoreButton = () => {
        setShowModal(true);
    };

    return (
        <View style={CommonStyles.container}>
            <TopBar returnButtonShow moreButtonShow searchBarShow={false} onClickButtonMore={onClickMoreButton}/>
            <ScrollView style={TagStyles.scrollViewContainer} showsVerticalScrollIndicator={false}>
                <Text style={TagStyles.textTag}>{tag.textTag}</Text>
                <View style={TagStyles.colorContainer}>
                    <Text style={TagStyles.textHolder}>Couleur :</Text>
                    <View style={[{backgroundColor: tag.colorTag}, TagStyles.colorTag]}></View>
                </View>
                {   
                    tag.books.size !== 0 &&
                    <View style={TagStyles.booksContainer}>
                        <Text style={TagStyles.textHolder}>Livres : ({tag.books.size.toString()})</Text>
                        {
                            Array.from(tag.books.values()).map((book, idBook) => 
                                <BookCard key={idBook} book={book} navigation={navigation}/>
                            )
                        }
                    </View>
                }
            </ScrollView>
            <EditTagModal navigation={navigation} showModal={showModal} setShowModal={setShowModal} newTag={tag} />
        </View>
    )
}