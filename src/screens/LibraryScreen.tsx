import { FlatList, RefreshControl, Text, ToastAndroid, View } from 'react-native'
import CommonStyles from '../styles/CommonStyles'
import TitleScreen from '../components/TitleScreen'
import BookCard from '../components/cards/BookCard'
import { useCallback, useEffect, useState } from 'react'
import Book from '../Common/Class/Book'
import TopBar from '../components/Inputs/TopBar'
import { COLORS } from '../Common/CommonColors'
import LibraryStyles from '../styles/screens/LibraryStyles'
import TextIconButton from '../components/Buttons/TextIconButton'
import BookService from '../Common/services/BookService'

export default function LibraryScreen({ navigation } : any) {

    const bookService = new BookService();

    const [books, setBooks] = useState<Book[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        navigation.addListener('focus', () => {
            onRefresh();
        });
    }, [navigation])

    const onRefresh = useCallback(async () => {
        try{
            await bookService.fetchBooks();
            setBooks(bookService.books)
            setIsLoading(false);
        } catch(error) {
            ToastAndroid.show("Problème lors du chargement des livres" , ToastAndroid.CENTER);
        }
    }, []);


    const onChangeSearch = (text : string) => {
        const filteredBooks = bookService.books.filter((book) =>
            book.title.toLowerCase().includes(text.toLowerCase()) || book.author.toUpperCase().includes(text.toUpperCase())
        );
        bookService.setBooks(filteredBooks);
    };
    
    const onClickAddBook = () => {
        const newBook = new Book();
        navigation.navigate('AddBookScreen', { newBook });
    };

    const renderHeader = () => {
        return(
            <TitleScreen title={'Bibliothèque'}/>
        )
    };

    return (
        <View style={CommonStyles.container}>
            <TopBar onChangeSearch={onChangeSearch}/>
            <View style={CommonStyles.content}>
                <FlatList style={CommonStyles.flatListContainer} 
                    ListEmptyComponent={<Text style={CommonStyles.noItems}>{!isLoading && "Aucun livre n'a été trouvé"}</Text>}
                    contentContainerStyle = {LibraryStyles.booksContainer}
                    data={books}
                    renderItem={({item}) => <BookCard book={item}/>}
                    keyExtractor={item => item.idBook.toString()}
                    refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh}/>}
                    ListHeaderComponent={renderHeader}
                />
                <View style={CommonStyles.buttonContainer}>
                    <TextIconButton callBack={onClickAddBook} size={22} text={'Ajouter un livre'} containerStyle={CommonStyles.addButton} nameIcon={'plus'} color={COLORS.background}/>
                </View>
            </View>
        </View>
  )
}

