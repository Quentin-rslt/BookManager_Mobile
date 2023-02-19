import { View } from 'react-native'
import NavBar from '../components/NavBar'
import CommonStyles from '../styles/CommonStyles'
import TitleScreen from '../components/TitleScreen'
import BookCard from '../components/cards/BookCard'
import { ScrollView } from 'react-native-gesture-handler'
import {getBooks} from '../Common/services/BookService'
import SearchBar from '../components/SearchBar'
import { useState } from 'react'

export default function LibraryScreen() {
    const [books, setBooks] = useState(Array.from(getBooks()));

    return (
        <View style={CommonStyles.container}>
            <SearchBar books={books}/>
            <View style={CommonStyles.content}>
                <TitleScreen title={'Bibliothèque'}/>
                <ScrollView style={CommonStyles.scrollViewContainer}>
                    <View style={CommonStyles.componentContainer}>
                        {
                            getBooks().map((book, idBook) =>
                                <View style={CommonStyles.booksContainer} key={idBook}>
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

