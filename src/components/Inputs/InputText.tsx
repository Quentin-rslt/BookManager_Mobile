import { View, Text, TextInput, KeyboardTypeOptions } from 'react-native'
import React from 'react'
import InputTextStyles from '../../styles/components/Inputs/InputTextStyles';
import CommonStyles from '../../styles/CommonStyles';

interface Props {
    placeholder: string;
    multiline ?: boolean;
    containerStyle ?: any;
    onChangeText : (text: string) => void;
    keyboardType?: KeyboardTypeOptions;
    defaultValue?: string;
    maxLength?: number;
  }
  
  export default function InputText({placeholder, multiline=false, containerStyle, onChangeText, keyboardType = 'ascii-capable', defaultValue = '', maxLength} : Props) {
    return (
        <View style={[InputTextStyles.txtFieldBackground, containerStyle]}>
            <Text style={InputTextStyles.holderText}>{placeholder}</Text>
            {
              maxLength ? 
              <TextInput multiline={multiline} keyboardType={keyboardType} defaultValue={defaultValue} style={InputTextStyles.inputText} onChangeText={onChangeText} maxLength={maxLength}/> 
              :
              <TextInput multiline={multiline} keyboardType={keyboardType} defaultValue={defaultValue} style={InputTextStyles.inputText} onChangeText={onChangeText}/>
            }
        </View>
    )
  }