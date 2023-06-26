import { View, Text, RefreshControl, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import CommonStyles from '../styles/CommonStyles'
import Client from '../library/class/Client';
import TopBar from '../components/TopBar';
import { ScrollView } from 'react-native-gesture-handler';
import HomeStyles from '../styles/Screens/HomeStyles';
import BookFavCard from '../components/cards/book/BookFavCard';
import BookRecentListenCard from '../components/cards/book/BookRecentListenCard';
import TagMostUseCard from '../components/cards/tag/TagMostUseCard';
import ReadingCardWithBook from '../components/cards/reading/ReadingCardWithBook';
import TextIconButton from '../components/Buttons/TextIconButton';

export default function HomeScreen({ navigation, route } : any) {

    const client:Client = route.params.client;

    const [favBooks, setFavBooks] = useState(Array.from(client.bookService.books.values()));
    const [recentBooks, setRecentBooks] = useState(client.bookService.getFavBooks());
    const [tags, setTags] = useState(Array.from(client.tagService.tags.values()));
    const [readings, setReadings] = useState(Array.from(client.readingService.readings.values()));
    const [isLoading, setIsLoading] = useState<boolean>(false);
    
    useEffect(() => {
        navigation.addListener('focus', () => {
            onRefresh();
        });
    }, [navigation]);

    const onRefresh = () => {
        const tags = client.tagService.tags.values();
        const readings = client.readingService.readings.values();

        getBooks();
        setTags([...Array.from(tags)]);
        setReadings([...Array.from(readings).slice(0, 4)]);
    };

    const onRefreshFecthAPI = async () => {
        setIsLoading(true);
        try{
            await client.fetchAll();
            onRefresh();
        } catch(error) {
            ToastAndroid.show("Problème lors du chargement des livres" , ToastAndroid.CENTER);
        }
        setIsLoading(false);
    };

    const getBooks = () => {
        //Recent book list
        const recentBooks = Array.from(client.bookService.books.values());
        setRecentBooks([...recentBooks.slice(0, 6)]);

        // Fav book list
        const favBooks = client.bookService.getFavBooks();
        setFavBooks([...favBooks.slice(0, 5)]);
    }

    const onShowAllItems = () => {
        setReadings(readings.concat(Array.from(client.readingService.readings.values()).slice(readings.length, client.readingService.readings.size)));
	}

    return (
        <View style={CommonStyles.container}>
            <TopBar searchBarShow={false} headerShow onClickButtonHeader={onRefresh} titleHeader='Bonjour' iconNameTitleHeader={'home-variant'} iconNameButtonHeader={'cog-outline'}/>
            <ScrollView style={HomeStyles.scrollViewContainer} refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefreshFecthAPI}/>}>
                <View style={HomeStyles.container}>
                    <View style={HomeStyles.itemsWrapperContainer}>
                        {recentBooks.length !== 0 && <Text style={[HomeStyles.textHolder, {paddingLeft: 4}]}>Livres récemment lu</Text>}
                        <View style={HomeStyles.itemsWrapper}>
                            {
                                recentBooks.map((book, idBook) => 
                                    <View key={idBook} style={HomeStyles.itemWrapperContainer}>
                                        <BookRecentListenCard key={idBook} book={book} navigation={navigation}/>
                                    </View>
                                )
                            }
                        </View>
                    </View>
                    <View style={HomeStyles.itemsContainer}>
                        {favBooks.length !== 0 && <Text style={HomeStyles.textHolder}>Livres favoris ({favBooks.length})</Text>}
                        <ScrollView style={HomeStyles.itemsScrollView} horizontal showsHorizontalScrollIndicator={false}>
                            {
                                favBooks.map((book, idBook) => 
                                    <View key={idBook} style={HomeStyles.favBookCardContainer}>
                                        <BookFavCard key={idBook} book={book} navigation={navigation} setFavBooks={setFavBooks}/>
                                    </View>
                                )
                            }
                        </ScrollView>
                    </View>
                    <View style={HomeStyles.itemsContainer}>
                        {tags.length !== 0 && <Text style={HomeStyles.textHolder}>Tags les plus utilisés</Text>}
                        <ScrollView horizontal style={HomeStyles.itemsScrollView} showsHorizontalScrollIndicator={false}>
                            {
                                tags.map((tag, idTag) => 
                                    <View key={idTag} style={HomeStyles.tagCardContainer}>
                                        <TagMostUseCard key={idTag} tag={tag} navigation={navigation}/>
                                    </View>
                                )
                            }
                        </ScrollView>
                    </View>
                    <View style={HomeStyles.itemsContainer}>
                        {readings.length !== 0 && <Text style={HomeStyles.textHolder}>Listes des lectures ({client.readingService.readings.size})</Text>}
                        {
                            readings.map((reading, idReading) => 
                                <ReadingCardWithBook key={idReading} reading={reading}/>
                            )
                        }
                        {
                            readings.length !== client.readingService.readings.size && 
                            <TextIconButton callBack={onShowAllItems} text='Voir tout' buttonStyle={HomeStyles.showAllButton} textStyle={HomeStyles.textButton}/>
                        }
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}