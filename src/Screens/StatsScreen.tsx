import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CommonStyles from '../styles/CommonStyles'
import TextIconButton from '../components/Buttons/TextIconButton';
import { COLORS } from '../library/CommonColors';
import StatsStyles from '../styles/Screens/StatsStyles';
import TitleScreen from '../components/TitleScreen';
import Client from '../library/class/Client';
import NumberIcon from '../components/NumberIcon';

export default function StatsScreen({ navigation, route } : any) {

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