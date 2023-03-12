import { View, Text, KeyboardType, TextInput } from 'react-native'
import React from 'react'
import InputTextStyles from '../../styles/components/Inputs/InputTextStyles';
import CommonStyles from '../../styles/CommonStyles';

interface Props {
    placeholder: string;
    multiline ?: boolean;
    containerStyle ?: any;
    onChangeText : (text: string) => void;
  }
  
  export default function InputText({placeholder, multiline=false, containerStyle, onChangeText} : Props) {
    return (
        <View style={[InputTextStyles.txtFieldBackground, containerStyle]}>
            <Text style={CommonStyles.holderText}>{placeholder}</Text>
            <TextInput multiline={multiline} style={InputTextStyles.inputText} onChangeText={onChangeText}/>
        </View>
    )
  }