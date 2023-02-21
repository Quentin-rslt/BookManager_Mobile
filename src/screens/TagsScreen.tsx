import { ScrollView, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import CommonStyles from '../styles/CommonStyles'
import TitleScreen from '../components/TitleScreen'
import {getTags} from '../Common/services/TagService'
import TagCard from '../components/cards/TagCard'
import TagsStyles from '../styles/screens/TagsStyles'
import SearchBar from '../components/SearchBar'
import Tag from '../Common/types/tag'

export default function TagsScreen() {
    const [tags, setTags] = useState<Tag[]>([]);
    const [filteredTags, setFilteredTags] = useState<Tag[]>([]);

    useEffect(() => {
        getTags().then(tags => {setTags([...tags]), setFilteredTags([...tags])});
    }, [])

    const onChangeSearch = (text : string) => {
        const filteredTags:Tag[] = Array.from(tags).filter((tag) => {
            return tag.textTag.toUpperCase().includes(text.toUpperCase());
        });
        setFilteredTags(filteredTags);
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
                        </View>
                    </ScrollView>
            </View>
            <NavBar libraryFocus={false} tagsFocus={true}/>
        </View>
    ) 
}