import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'
import CommonStyles from '../styles/CommonStyles'
import TitleScreen from '../components/TitleScreen'
import BookCard from '../components/BookCard'
import Book from '../Common/types/book'
import { ScrollView } from 'react-native-gesture-handler'

type Props = {
  book:Book;
}

export default function LibraryScreen(props: Props) {
    return (
        <View style={CommonStyles.container}>
            <View style={CommonStyles.content}>
                <TitleScreen title={'Bibliothèque'}/>
                <ScrollView style={CommonStyles.scrollViewContainer}>
                    <View style={CommonStyles.componentContainer}>
                        <BookCard book={props.book}/>
                        <BookCard book={props.book}/>
                        <BookCard book={props.book}/>
                        <BookCard book={props.book}/>
                    </View>
                </ScrollView>
            </View>
            <NavBar libraryFocus={true} tagsFocus={false}/>
        </View>
  )
}