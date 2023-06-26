import { Text, ToastAndroid, View } from 'react-native'
import BookStyles from '../../styles/Screens/Book/BookStyles'
import Book from '../../library/class/Book'
import { ScrollView } from 'react-native-gesture-handler'
import NumberIcon from '../../components/NumberIcon'
import TagSticker from '../../components/Buttons/TagSticker'
import ReadingCard from '../../components/cards/reading/ReadingCard'
import { useEffect, useState } from 'react'
import TopBar from '../../components/TopBar'
import CommonStyles from '../../styles/CommonStyles'
import EditBookModal from '../../components/Modals/EditBookModal'
import BookBuilder from '../../library/builders/BookBuilder'
import TextIconButton from '../../components/Buttons/TextIconButton'
import { COLORS } from '../../library/CommonColors'

export default function BookScreen({ navigation, route } : any) {

    const [book, setBook] = useState<Book|undefined>(route.params.book);
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        navigation.addListener('focus', () => {
            onRefresh();
        });
    }, [navigation]);

    const onClickMoreButton = () => {
        setShowModal(true);
    };

    const onRefresh = () => {
        setBook(undefined);

        const newBook = book && book.client.bookService.books.get(book.idBook);
        
        newBook && setBook(newBook);
    };
        
    const onLikedBook = async () => {
        if(book) {
            const bookBuilder:BookBuilder = new BookBuilder(book.client, book.toJSON());
            bookBuilder.setIsFav(!book.isFav);
    
            try {
                await book.client.bookService.favBook(bookBuilder);
    
                onRefresh();
            } catch(error) {
                ToastAndroid.show("Problème lors du like du livres" , ToastAndroid.CENTER);
            }
        }
    };

    return (
        <View style={CommonStyles.container}>
            <TopBar returnButtonShow moreButtonShow searchBarShow={false} onClickButtonMore={onClickMoreButton}/>
            {
                book && 
                <ScrollView style={BookStyles.scrollViewContainer} showsVerticalScrollIndicator={false}>
                    <Text style={BookStyles.title}>{book.title}</Text>
                    <Text style={BookStyles.author}>{book.author}</Text>
                    <Text style={BookStyles.textHolder}>Statistiques </Text>
                    <View style={BookStyles.statsContainer}>
                        <NumberIcon iconNumber={book.numberOP} iconName={"book-open-page-variant-outline"} iconSize={30} iconFontSize={30}/>
                        <NumberIcon iconNumber={book.notePerso} iconName={"star"} iconSize={30} iconFontSize={30}/>
                        <Text style={BookStyles.textNumber}>{book.releaseYear}</Text>
                        {
                            book.isFav ?
                            <TextIconButton callBack={onLikedBook} showText={false} iconName={'cards-heart'} iconSize={30} iconColor={COLORS.accentColor}/>
                            :  
                            <TextIconButton callBack={onLikedBook} showText={false} iconName={'cards-heart-outline'} iconSize={30} iconColor={COLORS.accentColor}/>
                        }
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
                            <Text style={BookStyles.textHolder}>Description </Text>
                            <Text style={BookStyles.description}>{book.summary}</Text>
                        </View>
                    }
                    {
                        book.readings.size !== 0 &&
                        <View>
                            <Text style={BookStyles.textHolder}>Lectures ({book.readings.size})</Text>
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
            }
            {book && <EditBookModal book={book} navigation={navigation} showModal={showModal} setShowModal={setShowModal}/>}
        </View>
    )
}