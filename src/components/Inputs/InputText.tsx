import { View, Text, KeyboardType, TextInput, KeyboardTypeOptions } from 'react-native'
import React from 'react'
import InputTextStyles from '../../styles/components/Inputs/InputTextStyles';
import CommonStyles from '../../styles/CommonStyles';

interface Props {
    placeholder: string;
    multiline ?: boolean;
    containerStyle ?: any;
    onChangeText : (text: string) => void;
    keyboardType?: KeyboardTypeOptions;
  }
  
  export default function InputText({placeholder, multiline=false, containerStyle, onChangeText, keyboardType = 'ascii-capable'} : Props) {
    return (
        <View style={[InputTextStyles.txtFieldBackground, containerStyle]}>
            <Text style={CommonStyles.holderText}>{placeholder}</Text>
            <TextInput multiline={multiline} keyboardType={keyboardType} style={InputTextStyles.inputText} onChangeText={onChangeText}/>
        </View>
    )
  }