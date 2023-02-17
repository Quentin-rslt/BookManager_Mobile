import { ScrollView, View } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'
import CommonStyles from '../styles/CommonStyles'
import TitleScreen from '../components/TitleScreen'
import getTags from '../Common/services/TagService'
import TagCard from '../components/TagCard'
import TagsStyles from '../styles/screens/TagsStyles'

export default function TagsScreen() {
  return (
    <View style={CommonStyles.container}>
        <View style={CommonStyles.content}>
            <TitleScreen title={'Tags'}/>
            <ScrollView style={CommonStyles.scrollViewContainer}>
                    <View style={TagsStyles.tagsContainer}>
                        {
                            getTags().map((tag, idTag) =>
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