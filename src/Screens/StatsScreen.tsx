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
            <TextIconButton callBack={() => navigation.goBack()} text='Bibliothèque' iconSize={24} iconName={'bookshelf'} iconColor={COLORS.background} buttonStyle={StatsStyles.homeButton}/>
            <View style={CommonStyles.content}>
                <ScrollView style={CommonStyles.scrollViewContainer}>
                    <TitleScreen title='Statistiques'/>
                    <View style={StatsStyles.container}>
                        <NumberIcon iconName={"book-open-outline"} iconNumber={books.length} iconFontSize={50} iconSize={50}/>
                        <NumberIcon iconName={"tag"} iconNumber={tags.length} iconFontSize={50} iconSize={50}/>
                        <NumberIcon iconName={"eye-outline"} iconNumber={readings.length} iconFontSize={50} iconSize={50}/>
                    </View>
                    {
                        readings.map((reading) => 
                            <Text key={reading.idReading}>{reading.book?.title}</Text>
                        )
                    }
                </ScrollView>
            </View>
        </View>
    )
}