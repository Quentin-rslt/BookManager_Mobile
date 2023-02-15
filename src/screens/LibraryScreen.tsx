import { SafeAreaView, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import CommonStyles from '../styles/CommonStyles'
import TitleScreen from '../components/TitleScreen'
import BookCard from '../components/BookCard'
import Book from '../Common/types/book'
import { ScrollView } from 'react-native-gesture-handler'
import BookService from '../Common/services/BookService'

type Props = {
  book:Book;
}

export default function LibraryScreen(props: Props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
    fetch("http://localhost:9000/api/book/all")
        .then(res => res.json())
        .then(
        (result) => {
            setIsLoaded(true);
            setBooks(result);
        },
        (error) => {
            setIsLoaded(true);
            setError(error);
        }
        )
    }, [])

    return (
        <View style={CommonStyles.container}>
            <View style={CommonStyles.content}>
                <TitleScreen title={'Bibliothèque'}/>
                <ScrollView style={CommonStyles.scrollViewContainer}>
                    <View style={CommonStyles.componentContainer}>
                        {
                            books.map(
                                book =>
                                <View key={book.idBook}>
                                    <BookCard book={book}/>
                                </View>
                            )
                        }
                    </View>
                </ScrollView>
            </View>
            <NavBar libraryFocus={true} tagsFocus={false}/>
        </View>
  )
}

