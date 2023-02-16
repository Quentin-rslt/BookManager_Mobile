import { View } from 'react-native'
import NavBar from '../components/NavBar'
import CommonStyles from '../styles/CommonStyles'
import TitleScreen from '../components/TitleScreen'
import BookCard from '../components/BookCard'
import Book from '../Common/types/book'
import { ScrollView } from 'react-native-gesture-handler'
import {getBooks} from '../Common/services/BookService'
import { Key } from 'react'

export default function LibraryScreen() {
    return (
        <View style={CommonStyles.container}>
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

