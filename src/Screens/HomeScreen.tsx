import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CommonStyles from '../styles/CommonStyles'
import Client from '../library/class/Client';

export default function HomeScreen({ navigation, route } : any) {

    const client:Client = route.params.client;

    const [books, setBooks] = useState(Array.from(client.bookService.books.values()));
    const [tags, setTags] = useState(Array.from(client.tagService.tags.values()));
    const [readings, setReadings] = useState(Array.from(client.readingService.readings.values()));
    
    useEffect(() => {
        navigation.addListener('focus', () => {
            onRefresh();
        });
    }, [navigation]);

    const onRefresh = async () => {
        const books = client.bookService.books.values();
        const tags = client.tagService.tags.values();
        const readings = client.readingService.readings.values();

        setBooks([...Array.from(books)]);
        setTags([...Array.from(tags)]);
        setReadings([...Array.from(readings)]);
    };

    return (
        <View style={CommonStyles.container}>

        </View>
    )
}