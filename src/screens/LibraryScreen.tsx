import { SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import NavBar from '../components/NavBar'
import CommonStyles from '../styles/CommonStyles'
import TitleScreen from '../components/TitleScreen'

type Props = {}

export default function LibraryScreen(props: Props) {
  return (
    <View style={CommonStyles.container}>
            <View style={CommonStyles.content}>
                <TitleScreen title={'Bibliothèque'}/>
            </View>
            <NavBar libraryFocus={true} tagsFocus={false}/>
    </View>
  )
}