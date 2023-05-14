import { View, Text, FlatList, RefreshControl, ToastAndroid } from 'react-native'
import React, { useCallback, useState } from 'react'
import CommonStyles from '../../styles/CommonStyles'
import TitleScreen from '../../components/TitleScreen'
import TagCard from '../../components/Cards/TagCard'
import TagsStyles from '../../styles/Screens/Tag/TagsStyles'
import TopBar from '../../components/Inputs/TopBar'
import { COLORS } from '../../Common/CommonColors'
import TextIconButton from '../../components/Buttons/TextIconButton'
import Client from '../../Common/Class/Client'
import Tag from '../../Common/Class/Tag'

export default function TagsScreen({navigation, route } : any) {

    const client:Client = route.params.client;

    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const onRefresh = useCallback(async () => {
        try{
            setIsLoading(true);
            await client.tagService.fetchTags();
            setIsLoading(false);
        } catch(error) {
            ToastAndroid.show("Problème lors du chargement des tags" , ToastAndroid.CENTER);
        }
    }, []);

    const onClickAddTag = () => {
        const tag = new Tag(client);
        navigation.navigate('AddTagScreen', { tag });
    };

    const renderHeader = () => {
        return(
            <TitleScreen title={'Tags'}/>
        )
    };

    return (
        <View style={CommonStyles.container}>
            <TopBar onChangeSearch={(text) => setSearch(text)}/>
            <View style={CommonStyles.content}>
                <FlatList style={CommonStyles.flatListContainer} 
                    ListEmptyComponent={<Text style={CommonStyles.noItems}>{!isLoading && "Aucun tag n'a été trouvé"}</Text>}
                    columnWrapperStyle={TagsStyles.columnWrapperStyle}
                    contentContainerStyle = {TagsStyles.tagsContainer}
                    initialNumToRender={2}
                    numColumns={2}
                    data={client.tagService.tags}
                    renderItem={({item}) => {
                        if(item.textTag.toUpperCase().includes(search.toUpperCase())){
                            return <TagCard tag={item}/>
                        } else {
                            return null;
                        }
                    }}
                    keyExtractor={item => item.idTag.toString()}
                    refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh}/>}
                    ListHeaderComponent={renderHeader}
                />
                <View style={CommonStyles.buttonContainer}>
                    <TextIconButton callBack={onClickAddTag} size={22} text={'Ajouter un tag'} nameIcon={'plus'} buttonStyle={CommonStyles.addButton} color={COLORS.background}/>
                </View>
            </View>
        </View>
    ) 
}