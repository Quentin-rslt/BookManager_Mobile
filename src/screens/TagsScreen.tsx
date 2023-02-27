import { ScrollView, View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/Buttons/NavBar'
import CommonStyles from '../styles/CommonStyles'
import TitleScreen from '../components/TitleScreen'
import {getTags} from '../Common/services/TagService'
import TagCard from '../components/cards/TagCard'
import TagsStyles from '../styles/screens/TagsStyles'
import SearchBar from '../components/Inputs/SearchBar'
import Tag from '../Common/types/tag'

export default function TagsScreen() {
    const [tags, setTags] = useState<Tag[]>([]);
    const [filteredTags, setFilteredTags] = useState<Tag[]>([]);
    const [noTags, setNoTags] = useState<boolean>(false);

    useEffect(() => {
        getTags().then(tags => {setTags([...tags]), setFilteredTags([...tags])});
    }, [])

    const onChangeSearch = (text : string) => {
        const filteredTags:Tag[] = Array.from(tags).filter((tag) => {
            return tag.textTag.toUpperCase().includes(text.toUpperCase());
        });
        setFilteredTags(filteredTags);
        setNoTags(filteredTags.length == 0);
    };

    return (
        <View style={CommonStyles.container}>
            <SearchBar onChangeSearch={onChangeSearch}/>
            <View style={CommonStyles.content}>
                <TitleScreen title={'Tags'}/>
                <ScrollView style={CommonStyles.scrollViewContainer}>
                    <View style={TagsStyles.tagsContainer}>
                        {
                            filteredTags.map((tag, idTag) =>
                                <View key={idTag}>
                                    <TagCard tag={tag}/>
                                </View> 
                            )
                        }
                        {
                            noTags && <Text style={CommonStyles.noItems}> Aucun tag n'a été trouvé </Text>
                        }
                    </View>
                </ScrollView>
            </View>
        </View>
    ) 
}