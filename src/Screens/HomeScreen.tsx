import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import CommonStyles from '../styles/CommonStyles'
import Client from '../library/class/Client';
import TopBar from '../components/TopBar';
import { ScrollView } from 'react-native-gesture-handler';
import HomeStyles from '../styles/Screens/HomeStyles';
import BookCard from '../components/cards/BookCard';

export default function HomeScreen({ navigation, route } : any) {

    const client:Client = route.params.client;

    const [favBooks, setRecentListenBooks] = useState(Array.from(client.bookService.books.values()));
    const [tags, setTags] = useState(Array.from(client.tagService.tags.values()));
    const [readings, setReadings] = useState(Array.from(client.readingService.readings.values()));
    
    useEffect(() => {
        navigation.addListener('focus', () => {
            onRefresh();
        });
    }, [navigation]);

    const onRefresh = () => {
        getBooks();
        const tags = client.tagService.tags.values();
        const readings = client.readingService.readings.values();

        setTags([...Array.from(tags)]);
        setReadings([...Array.from(readings)]);
    };

    const getBooks = () => {
        // Fav book list
        const books = Array.from(client.bookService.books.values()).filter((book) =>
            book.isFav === true
        );
        setRecentListenBooks([...books.slice(0, 6)]);
    }

    return (
        <View style={CommonStyles.container}>
            <TopBar searchBarShow={false} headerShow onClickButtonHeader={onRefresh} titleHeader='Bonjour' iconNameTitleHeader={'home-variant'} iconNameButtonHeader={'cog-outline'}/>
            <ScrollView style={CommonStyles.scrollViewContainer}>
                <View style={HomeStyles.container}>
                    <View style={HomeStyles.favBooksContainer}>
                        <Text style={HomeStyles.textHolder}>Livres favoris</Text>
                        <ScrollView style={HomeStyles.favBooksScrollView} horizontal showsHorizontalScrollIndicator={false}>
                            {
                                favBooks.map((book, idBook) => 
                                    <View key={idBook} style={HomeStyles.bookCardContainer}>
                                        <BookCard key={idBook} book={book} navigation={navigation}/>
                                    </View>
                                )
                            }
                        </ScrollView>
                    </View>
                    <View>
                        <ScrollView horizontal>

                        </ScrollView>
                    </View>
                    <View>
                        <ScrollView horizontal>

                        </ScrollView>
                    </View>
                    <View>

                    </View>
                </View>
            </ScrollView>
        </View>
    )
}