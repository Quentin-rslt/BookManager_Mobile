import { View, Text, FlatList, RefreshControl, ToastAndroid } from 'react-native'
import { useEffect, useState } from 'react'
import CommonStyles from '../../styles/CommonStyles'
import TagCard from '../../components/cards/tag/TagCard'
import TagsStyles from '../../styles/Screens/Tag/TagsStyles'
import TopBar from '../../components/TopBar'
import Client from '../../library/class/Client'
import TagBuilder from '../../library/builders/TagBuilder'
import Tag from '../../library/class/Tag'

export default function TagsScreen({navigation, route } : any) {

    const client:Client = route.params.client;

    const [tags, setTags] = useState(Array.from(client.tagService.getTags().values()));
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>('');

    useEffect(() => {
        navigation.addListener('focus', () => {
            onRefresh();
        });
    }, [navigation]);

    const onRefresh = () => {
        const tags = Array.from(client.tagService.getTags().values());
        setTags([...tags]);
        setSearchText('');
    };

    const onRefreshFecthAPI = async () => {
        setIsLoading(true);
        try{
            await client.tagService.fetchTags();
            onRefresh();
        } catch(error) {
            ToastAndroid.show("Problème lors du chargement des tags" , ToastAndroid.CENTER);
        }
        setIsLoading(false);
        setSearchText('');
    };

    const onChangeSearch = (text : string) => {
        const filteredTags = Array.from(client.tagService.tags.values()).filter((tag) =>
            tag.textTag.toLowerCase().includes(text.toLowerCase())
        );
        setTags([...filteredTags]);
        setSearchText(text);
    };

    const onClickAddTag = () => {
        const tag = new TagBuilder(client);
        navigation.navigate('AddTagScreen', { tag });
    };

    return (
        <View style={CommonStyles.container}>
            <TopBar value={searchText} onChangeSearch={(text) => onChangeSearch(text)} headerShow iconNameTitleHeader={'tag-multiple'} iconNameButtonHeader={'plus'} titleHeader='Mes Tags' onClickButtonHeader={onClickAddTag}/>
            <FlatList style={CommonStyles.flatListContainer} 
                ListEmptyComponent={<Text style={CommonStyles.noItems}>{!isLoading && "Aucun tag n'a été trouvé"}</Text>}
                columnWrapperStyle={TagsStyles.columnWrapperStyle}
                contentContainerStyle = {TagsStyles.tagsContainer}
                initialNumToRender={2}
                numColumns={2}
                data={tags}
                renderItem={({item, index}) => 
                    <View style={{flex: 1, marginLeft: index % 2 !== 0 ? 20 : 0}}>
                        <TagCard key={item.idTag} tag={item} navigation={navigation}/>
                    </View>
                }
                keyExtractor={item => item.idTag.toString()}
                refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefreshFecthAPI}/>}
            />
        </View>
    ) 
}