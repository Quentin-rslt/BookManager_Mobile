import { FlatList, RefreshControl, Text, ToastAndroid, View } from 'react-native'
import CommonStyles from '../../styles/CommonStyles'
import TitleScreen from '../../components/TitleScreen'
import BookCard from '../../components/Cards/BookCard'
import { useCallback, useState } from 'react'
import Book from '../../Common/Class/Book'
import TopBar from '../../components/Inputs/TopBar'
import { COLORS } from '../../Common/CommonColors'
import LibraryStyles from '../../styles/Screens/Book/LibraryStyles'
import TextIconButton from '../../components/Buttons/TextIconButton'
import Client from '../../Common/Class/Client'

export default function LibraryScreen({ navigation, route } : any) {

    const client:Client = route.params.client;
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onRefresh = useCallback(async () => {
        try{    
            setIsLoading(true);
            await client.bookService.fetchBooks();
            setIsLoading(false);
        } catch(error) {
            ToastAndroid.show("Problème lors du chargement des livres" , ToastAndroid.CENTER);
        }
    }, []);
    
    const onClickAddBook = () => {
        const newBook = new Book(client);
        navigation.navigate('AddBookScreen', { newBook, client });
    };

    const renderHeader = () => {
        return(
            <TitleScreen title={'Bibliothèque'}/>
        )
    };

    return (
        <View style={CommonStyles.container}>
            <TopBar onChangeSearch={(text) => setSearch(text)}/>
            <View style={CommonStyles.content}>
                <FlatList style={CommonStyles.flatListContainer} 
                    ListEmptyComponent={<Text style={CommonStyles.noItems}>{!isLoading && "Aucun livre n'a été trouvé"}</Text>}
                    contentContainerStyle = {LibraryStyles.booksContainer}
                    data={client.bookService.books}
                    renderItem={({item}) => {
                        if( item.title.toLowerCase().includes(search.toLowerCase()) || item.author.toLowerCase().includes(search.toLowerCase())){
                            return <BookCard book={item}/>
                        } else {
                            return null;
                        }
                    }}
                    keyExtractor={item => item.idBook.toString()}
                    refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh}/>}
                    ListHeaderComponent={renderHeader}
                />
                <View style={CommonStyles.buttonContainer}>
                    <TextIconButton callBack={onClickAddBook} size={22} text={'Ajouter un livre'} buttonStyle={CommonStyles.addButton} nameIcon={'plus'} color={COLORS.background}/>
                </View>
            </View>
        </View>
  )
}

