import { Text, View, ToastAndroid } from 'react-native'
import BookStyles from '../../styles/Screens/Book/BookStyles'
import Book from '../../library/class/Book'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import NumberIcon from '../../components/NumberIcon'
import TagSticker from '../../components/Buttons/TagSticker'
import ReadingCard from '../../components/cards/ReadingCard'
import TextIconButton from '../../components/Buttons/TextIconButton'
import { useEffect, useState } from 'react'
import BookBuilder from '../../library/builders/BookBuilder'
import TopBar from '../../components/TopBar'
import CommonStyles from '../../styles/CommonStyles'
import { COLORS } from '../../library/CommonColors'
import EditBookModal from '../../components/Modals/EditBookModal'

export default function BookScreen({ navigation, route } : any) {

    const [book, setBook] = useState<Book>(route.params.book);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        navigation.addListener('focus', () => {
            onRefresh();
        });
    }, [navigation]);

    const onRefresh = () => {
        const newBook = book.client.bookService.books.get(book.idBook);
        if(newBook){
            setBook(newBook);
        }
    };

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
            <EditBookModal book={book} navigation={navigation} isLoading={isLoading} setIsLoading={setIsLoading} showModal={showModal} setShowModal={setShowModal}/>
        </View>
    )
}