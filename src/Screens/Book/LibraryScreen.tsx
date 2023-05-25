import { FlatList, RefreshControl, Text, ToastAndroid, View } from 'react-native'
import CommonStyles from '../../styles/CommonStyles'
import TitleScreen from '../../components/TitleScreen'
import BookCard from '../../components/Cards/BookCard'
import { useEffect, useState } from 'react'
import TopBar from '../../components/inputs/TopBar'
import { COLORS } from '../../Common/CommonColors'
import LibraryStyles from '../../styles/Screens/book/LibraryStyles'
import TextIconButton from '../../components/buttons/TextIconButton'
import Client from '../../Common/class/Client'
import BookBuilder from '../../Common/builders/BookBuilder'

export default function LibraryScreen({ navigation, route } : any) {

    const client:Client = route.params.client;

    const [books, setBooks] = useState(Array.from(client.bookService.books.values()));
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        navigation.addListener('focus', () => {
            onRefresh();
        });
    }, [navigation]);

    const onRefresh = async () => {
        const books = client.bookService.books.values();
        setBooks([...Array.from(books)]);
    };

    const onRefreshFecthAPI = async () => {
        setIsLoading(true);
        try{    
            setBooks(Array.from((await client.bookService.fetchBooks()).values()));
        } catch(error) {
            ToastAndroid.show("Problème lors du chargement des livres" , ToastAndroid.CENTER);
        }
        setIsLoading(false);
    };
    
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
                    renderItem={({item}) => <BookCard key={item.idBook} book={item} onRefresh={onRefresh} navigation={navigation}/>}
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

