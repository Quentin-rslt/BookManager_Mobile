import { FlatList, RefreshControl, Text, ToastAndroid, View } from 'react-native'
import CommonStyles from '../../styles/CommonStyles'
import TitleScreen from '../../components/TitleScreen'
import BookCard from '../../components/Cards/BookCard'
import { useCallback, useEffect, useState } from 'react'
import Book from '../../Common/Class/Book'
import TopBar from '../../components/Inputs/TopBar'
import { COLORS } from '../../Common/CommonColors'
import LibraryStyles from '../../styles/Screens/Book/LibraryStyles'
import TextIconButton from '../../components/Buttons/TextIconButton'
import Client from '../../Common/Class/Client'
import BookBuilder from '../../Common/Class/BookBuilder'

export default function LibraryScreen({ navigation, route } : any) {

    const client:Client = route.params.client;

    const [books, setBooks] = useState(Array.from(client.bookService.books.values()));
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        navigation.addListener('focus', () => {
            onRefresh();
        });
    }, [navigation]);

    const onRefresh = useCallback(async () => {
        const books = client.bookService.books.values();
        setBooks([...Array.from(books)]);
    }, []);

    const onRefreshFecthAPI = useCallback(async () => {
        setIsLoading(true);
        try{    
            setBooks(Array.from((await client.bookService.fetchBooks()).values()));
        } catch(error) {
            ToastAndroid.show("Problème lors du chargement des livres" , ToastAndroid.CENTER);
        }
        setIsLoading(false);
    }, []);
    
    const onClickAddBook = () => {
        const book:BookBuilder = new BookBuilder(client);
        navigation.navigate('AddBookScreen', { book });
    };

    const onChangeSearch = (text : string) => {
        const filteredBooks = Array.from(client.bookService.books.values()).filter((book) =>
            book.title.toLowerCase().includes(text.toLowerCase()) || book.author.toUpperCase().includes(text.toUpperCase())
        );
        setBooks([...filteredBooks]);
    };

    const renderHeader = () => {
        return(
            <TitleScreen title={'Bibliothèque'}/>
        )
    };

    return (
        <View style={CommonStyles.container}>
            <TopBar onChangeSearch={(text) => onChangeSearch(text)}/>
            <View style={CommonStyles.content}>
                <FlatList style={CommonStyles.flatListContainer} 
                    ListEmptyComponent={<Text style={CommonStyles.noItems}>{!isLoading && "Aucun livre n'a été trouvé"}</Text>}
                    contentContainerStyle = {LibraryStyles.booksContainer}
                    data={books}
                    renderItem={({item}) => <BookCard key={item.idBook} book={item} onRefresh={onRefresh}/>}
                    keyExtractor={item => item.idBook.toString()}
                    refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefreshFecthAPI}/>}
                    ListHeaderComponent={renderHeader}
                />
                <View style={CommonStyles.buttonContainer}>
                    <TextIconButton callBack={onClickAddBook} iconSize={22} text={'Ajouter un livre'} buttonStyle={CommonStyles.addButton} iconName={'plus'} iconColor={COLORS.background}/>
                </View>
            </View>
        </View>
  )
}

