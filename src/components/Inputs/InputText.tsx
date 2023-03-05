import { View, Text, KeyboardType, TextInput } from 'react-native'
import React from 'react'
import InputTextStyles from '../../styles/components/Inputs/InputTextStyles';

interface Props {
    placeholder: string;
    multiline ?: boolean;
    containerStyle ?: any;
  }
  
  export default function InputText({placeholder, multiline=false, containerStyle} : Props) {
    return (
        <View style={[InputTextStyles.txtFieldBackground, containerStyle]}>
            <Text style={InputTextStyles.holderText}>{placeholder}</Text>
            <TextInput multiline={multiline} style={InputTextStyles.inputText}/>
        </View>
    )
  }