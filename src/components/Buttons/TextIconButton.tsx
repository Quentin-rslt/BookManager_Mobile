import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import TextIconButtonStyles from '../../styles/components/Buttons/TextIconButtonStyles';
import { COLORS } from '../../library/CommonColors';

interface Props {
    callBack: ()=>void;
    iconSize ?: number;
    text ?: string;
    iconName ?: any;
    iconColor ?: string;
    loadColor?: string;
    buttonStyle?: any;
    textStyle?: any;
    showIcon ?: boolean;
    showText ?: boolean;
    isLoading ?: boolean;
    numberOfLineText ?: number;
}

export default function TextIconButton({callBack, loadColor = COLORS.accentColor, iconName, iconSize, iconColor, buttonStyle, textStyle, text, showIcon = true, showText = true, isLoading = false, numberOfLineText= 2} : Props) {
    return (
        <TouchableOpacity onPress={callBack} style={buttonStyle} disabled={isLoading}>
            {
                !showText && showIcon && !isLoading ? <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor}/>
                :
                !showText && showIcon && isLoading && <ActivityIndicator size="small" color={loadColor}/>
            }
            {   
                !showIcon && showText && !isLoading ? <Text style={[TextIconButtonStyles.text, textStyle]} numberOfLines={numberOfLineText}>{text}</Text> 
                :
                !showIcon && showText && isLoading && <ActivityIndicator size="small" color={loadColor} style={[textStyle]}/>
                
            }
            {
                showIcon && showText && !isLoading ?
                <View style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center'}}>
                    <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor}/>
                    <Text style={[TextIconButtonStyles.text, textStyle]} numberOfLines={numberOfLineText}>{text}</Text> 
                </View>
                :
                showIcon && showText &&
                <View style={{display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center'}}>
                    <ActivityIndicator size="small" color={loadColor}/>
                    <Text style={[TextIconButtonStyles.text, textStyle]} numberOfLines={numberOfLineText}>{text}</Text> 
                </View>
            }
        </TouchableOpacity>
    )
}