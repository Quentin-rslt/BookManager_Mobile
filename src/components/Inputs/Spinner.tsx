import { View, Text } from 'react-native'
import React from 'react'
import InputSpinner from 'react-native-input-spinner';
import SpinnerStyles from '../../styles/components/Inputs/SpinnerStyles';
import { COLORS } from '../../Common/CommonColors';

interface Props {
    max : number;
    min : number;
    step : number;
    value : number;
    skin : any;
    placeholder : string;
};

export default function Spinner({max, min, step, value, skin, placeholder} : Props) {
    return (
        <View style={SpinnerStyles.container}>
            <Text style={SpinnerStyles.holderText}>{placeholder}</Text>
            <InputSpinner 
                min={min} 
                max={max} 
                step={step} 
                value={value} 
                skin={skin} 
                background={COLORS.componentBackground} 
                fontSize={14} 
                buttonTextColor={COLORS.clickableColor} 
                textColor={COLORS.foreground} 
                width={150} 
                style={SpinnerStyles.spinner}
            />
        </View>
    )
}