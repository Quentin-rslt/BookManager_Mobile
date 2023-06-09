import { Text, View } from 'react-native'
import BookStyles from '../../styles/Screens/Book/BookStyles'
import Book from '../../library/class/Book'
import { ScrollView } from 'react-native-gesture-handler'
import NumberIcon from '../../components/NumberIcon'
import TagSticker from '../../components/Buttons/TagSticker'
import ReadingCard from '../../components/cards/ReadingCard'
import { useState } from 'react'
import TopBar from '../../components/TopBar'
import CommonStyles from '../../styles/CommonStyles'
import EditBookModal from '../../components/Modals/EditBookModal'

export default function BookScreen({ navigation, route } : any) {

    const book:Book = route.params.book;

    const [showModal, setShowModal] = useState<boolean>(false);

    const onClickMoreButton = () => {
        setShowModal(true);
    };

    return (
        <View style={CommonStyles.container}>
            <TopBar returnButtonShow moreButtonShow searchBarShow={false} onClickButtonMore={onClickMoreButton}/>
            <ScrollView style={BookStyles.scrollViewContainer} showsVerticalScrollIndicator={false}>
                <Text style={BookStyles.title}>{book.title}</Text>
                <Text style={BookStyles.author}>{book.author}</Text>
                <Text style={BookStyles.textHolder}>Statistiques : </Text>
                <View style={BookStyles.statsContainer}>
                    <NumberIcon iconNumber={book.numberOP} iconName={"book-open-page-variant-outline"} iconSize={30} iconFontSize={30}/>
                    <NumberIcon iconNumber={book.notePerso} iconName={"star"} iconSize={30} iconFontSize={30}/>
                    <Text style={BookStyles.textNumber}>{book.releaseYear}</Text>
                </View>
                {
                    book.tags.size !== 0 && 
                    <View>
                        <Text style={BookStyles.textHolder}>Tags : ({book.tags.size.toString()})</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={BookStyles.tagsContainer}>
                            {
                                Array.from(book.tags.values()).map((tag, idTag) => 
                                    <TagSticker key={idTag} tag={tag} navigation={navigation}/>
                                )
                            }
                        </ScrollView>
                    </View>
                }
                {
                    book.summary != "" && 
                    <View>
                        <Text style={BookStyles.textHolder}>Description : </Text>
                        <Text style={BookStyles.description}>{book.summary}</Text>
                    </View>
                }
                {
                    book.readings.size !== 0 &&
                    <View>
                        <Text style={BookStyles.textHolder}>Lectures : ({book.readings.size})</Text>
                        <View style={BookStyles.readingsContainer}>
                            {
                                Array.from(book.readings.values()).map((reading, idReading) => 
                                    <ReadingCard key={idReading} reading={reading} showDeleteButton={false} idReading={idReading} book={book}/>
                                )
                            }
                        </View>
                    </View>
                }
            </ScrollView>
            <EditBookModal book={book} navigation={navigation} showModal={showModal} setShowModal={setShowModal}/>
        </View>
    )
}