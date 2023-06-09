import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import CommonStyles from '../styles/CommonStyles'
import Client from '../library/class/Client';
import TopBar from '../components/TopBar';
import { ScrollView } from 'react-native-gesture-handler';
import HomeStyles from '../styles/Screens/HomeStyles';
import Book from '../library/class/Book';
import Reading from '../library/class/Reading';

export default function HomeScreen({ navigation, route } : any) {

    const client:Client = route.params.client;

    const [recentListenBooks, setRecentListenBooks] = useState(Array.from(client.bookService.books.values()));
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
        const today = new Date();
        const books:Book[] = [];

        setRecentListenBooks([...books.slice(0, 6)]);
    }

    return (
        <View style={CommonStyles.container}>
            <TopBar searchBarShow={false} headerShow onClickButtonHeader={onRefresh} titleHeader='Bonjour' iconNameTitleHeader={'home-variant'} iconNameButtonHeader={'cog-outline'}/>
            <ScrollView style={CommonStyles.scrollViewContainer}>
                <View style={HomeStyles.recentListenBookContainer}>
                    {
                        recentListenBooks.map((book, idBook) => 
                            <Text key={idBook} style={{color: 'white'}}>{book.title}</Text>
                        )
                    }
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
            </ScrollView>
        </View>
    )
}