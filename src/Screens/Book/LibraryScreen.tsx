import { FlatList, RefreshControl, Text, ToastAndroid, View } from 'react-native'
import CommonStyles from '../../styles/CommonStyles'
import BookCard from '../../components/cards/book/BookCard'
import { useEffect, useState } from 'react'
import TopBar from '../../components/TopBar'
import LibraryStyles from '../../styles/Screens/Book/LibraryStyles'
import Client from '../../library/class/Client'
import BookBuilder from '../../library/builders/BookBuilder'
import SearchBooksModal from '../../components/Modals/SearchBooksModal'
import Book from '../../library/class/Book'

export default function LibraryScreen({ navigation, route } : any) {

    const client: Client = route.params.client;

    const [books, setBooks] = useState(Array.from(client.bookService.getBooks().values()));
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [showModalSearch, setShowModalSearch] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>('');

    useEffect(() => {
        navigation.addListener('focus', () => {
            onRefresh();
        });
    }, [navigation]);

    const onRefresh = () => {
        if(client.isFilteredBooks) {
            const books = client.bookService.getFilteredBooks().values();
            setBooks([...Array.from(books)]);
        } else {
            const books = client.bookService.getBooks().values();
            setBooks([...Array.from(books)]);
        }
        setSearchText('');
    };

    const onRefreshFecthAPI = async () => {
        setIsLoading(true);

        if(client.isFilteredBooks) {
            try{
                await client.bookService.fetchFilteredBooks(client.criteriaSearchBooks);
                onRefresh();
            } catch(error) {
                ToastAndroid.show("Problème lors du chargement des livres" , ToastAndroid.CENTER);
            }
        } else {
            try{
                await client.bookService.fetchBooks();
                onRefresh();
            } catch(error) {
                ToastAndroid.show("Problème lors du chargement des livres" , ToastAndroid.CENTER);
            }
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
        if(client.isFilteredBooks) {
            const filteredBooks = Array.from(client.bookService.filteredBooks.values()).filter((book) =>
                book.title.toLowerCase().includes(text.toLowerCase()) || book.author.toUpperCase().includes(text.toUpperCase())
            );
            setBooks([...filteredBooks]);
        } else {
            const filteredBooks = Array.from(client.bookService.books.values()).filter((book) =>
                book.title.toLowerCase().includes(text.toLowerCase()) || book.author.toUpperCase().includes(text.toUpperCase())
            );
            setBooks([...filteredBooks]);
        }
    };

    const onCLickSearchButton = () => {
        setShowModalSearch(true);
    };

    return (
        <View style={CommonStyles.container}>
            <TopBar value={searchText} onChangeSearch={(text) => onChangeSearch(text)} headerShow onClickButtonHeader={onClickAddBook} onClickSearchButton={onCLickSearchButton} titleHeader='Ma Bibliothéque' iconNameTitleHeader={'bookshelf'} iconNameButtonHeader={'plus'}/>
            <FlatList style={CommonStyles.flatListContainer} 
                ListEmptyComponent={<Text style={CommonStyles.noItems}>{!isLoading && "Aucun livre n'a été trouvé"}</Text>}
                contentContainerStyle = {LibraryStyles.booksContainer}
                data={books}
                renderItem={({item}) => <BookCard key={item.idBook} book={item} navigation={navigation} onRefresh={onRefresh}/>}
                keyExtractor={item => item.idBook.toString()}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefreshFecthAPI}/>}
            />
            <SearchBooksModal showModal={showModalSearch} setShowModal={setShowModalSearch} onRefresh={onRefresh} client={client}/>
        </View>
    )
}

