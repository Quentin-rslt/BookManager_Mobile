import { TextInput, View } from 'react-native'
import NavBar from '../components/NavBar'
import CommonStyles from '../styles/CommonStyles'
import TitleScreen from '../components/TitleScreen'
import BookCard from '../components/cards/BookCard'
import { ScrollView } from 'react-native-gesture-handler'
import {getBooks} from '../Common/services/BookService'
import { useEffect, useState } from 'react'
import Book from '../Common/types/book'
import SearchBar from '../components/SearchBar'

export default function LibraryScreen() {
    const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        getBooks().then(books => {setBooks([...books]), setFilteredBooks([...books])});
    }, [])

    const onChangeSearch = (text : string) => {
        let id:number = 0;
        const filteredBooks:Book[] = Array.from(books).filter((book) => {
            book.tags.map((tag, idTag) => {
                if(tag.textTag.toUpperCase().includes(text.toUpperCase())){
                    id = idTag;
                }
            });
            
            return book.title.toUpperCase().includes(text.toUpperCase()) || book.author.toUpperCase().includes(text.toUpperCase()) || book.tags[id].textTag.toUpperCase().includes(text.toUpperCase());
        });
        setFilteredBooks(filteredBooks);
    };

    return (
        <View style={CommonStyles.container}>
            <SearchBar onChangeSearch={onChangeSearch}/>
            <View style={CommonStyles.content}>
                <TitleScreen title={'Bibliothèque'}/>
                <ScrollView style={CommonStyles.scrollViewContainer}>
                    <View style={CommonStyles.componentContainer}>
                        {   
                            filteredBooks.map((book, idBook) =>
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

