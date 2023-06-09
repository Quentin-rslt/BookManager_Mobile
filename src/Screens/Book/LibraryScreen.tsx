import { FlatList, RefreshControl, Text, ToastAndroid, View } from 'react-native'
import CommonStyles from '../../styles/CommonStyles'
import BookCard from '../../components/cards/BookCard'
import { useEffect, useState } from 'react'
import TopBar from '../../components/TopBar'
import LibraryStyles from '../../styles/Screens/Book/LibraryStyles'
import Client from '../../library/class/Client'
import BookBuilder from '../../library/builders/BookBuilder'

export default function LibraryScreen({ navigation, route } : any) {

    const client:Client = route.params.client;

    const [books, setBooks] = useState(Array.from(client.bookService.books.values()));
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>('');

    useEffect(() => {
        navigation.addListener('focus', () => {
            onRefresh();
        });
    }, [navigation]);

    const onRefresh = () => {
        const books = client.bookService.books.values();
        setBooks([...Array.from(books)]);
        setSearchText('');
    };

    const onRefreshFecthAPI = async () => {
        setIsLoading(true);
        try{
            setBooks(Array.from((await client.bookService.fetchBooks()).values()));
        } catch(error) {
            ToastAndroid.show("Problème lors du chargement des livres" , ToastAndroid.CENTER);
        }
        setSearchText('');
        setIsLoading(false);
    };
    
    const onClickAddBook = () => {
        const book:BookBuilder = new BookBuilder(client);
        navigation.navigate('AddBookScreen', { book });
    };

    const onChangeSearch = (text : string) => {
        setSearchText(text);
        const filteredBooks = Array.from(client.bookService.books.values()).filter((book) =>
            book.title.toLowerCase().includes(text.toLowerCase()) || book.author.toUpperCase().includes(text.toUpperCase())
        );
        setBooks([...filteredBooks]);
    };

    return (
        <View style={CommonStyles.container}>
            <TopBar value={searchText} onChangeSearch={(text) => onChangeSearch(text)} headerShow onClickButtonHeader={onClickAddBook} titleHeader='Ma Bibliothéque' iconNameTitleHeader={'bookshelf'} iconNameButtonHeader={'plus'}/>
            <FlatList style={CommonStyles.flatListContainer} 
                ListEmptyComponent={<Text style={CommonStyles.noItems}>{!isLoading && "Aucun livre n'a été trouvé"}</Text>}
                contentContainerStyle = {LibraryStyles.booksContainer}
                data={books}
                renderItem={({item}) => <BookCard key={item.idBook} book={item} navigation={navigation}/>}
                keyExtractor={item => item.idBook.toString()}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefreshFecthAPI}/>}
            />
        </View>
    )
}

