import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DatePickerStyles from '../../styles/components/Buttons/DatePickerStyles';
import Reading from '../../Common/Class/Reading';
import TextIconButton from './TextIconButton';
import CommonStyles from '../../styles/CommonStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { COLORS } from '../../Common/CommonColors';
import Book from '../../Common/Class/Book';

interface Props {
    book: Book;
    refresh: boolean;
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function DatesPickers({book, refresh, setRefresh} : Props) {
    const [startDateReading, setStartDateReading] = useState<Date>(new Date());
    const [endDateReading, setEndDateReading] = useState<Date>(new Date());

    const [showStartDate, setShowStartDate] = useState(false);
    const [showEndDate, setShowEndDate] = useState(false);

    const changeStartReading = (event: any, selectedDate: any) => {
        setShowStartDate(false)
        const currentDate:Date = selectedDate;
        setStartDateReading(currentDate);
    };

    const changeEndReading = (event: any, selectedDate: any) => {  
        setShowEndDate(false)
        const currentDate:Date = selectedDate;
        setEndDateReading(currentDate);
    };

    const onClickStartReading = () => {
        setShowStartDate(true);
    }

    const onClickEndReading = () => {
        setShowEndDate(true);
    }

    const onClickAddReading = () => {
        book.addReading(new Reading(startDateReading, endDateReading));
        setRefresh(!refresh);
    }

    return (
        <View style={DatePickerStyles.container}>
            <View style={DatePickerStyles.datesContainer}>
                <TouchableOpacity style={DatePickerStyles.dateContainer} onPress={onClickStartReading}>
                    <Text style={CommonStyles.holderText}> Début </Text>
                    <Text style={DatePickerStyles.dateText}>{startDateReading.toLocaleDateString()}</Text>
                    {
                        showStartDate && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={startDateReading}
                                maximumDate={endDateReading}
                                mode='date'
                                display="default"
                                onChange={changeStartReading}
                            />
                        )
                    }
                </TouchableOpacity>
                <TouchableOpacity style={DatePickerStyles.dateContainer} onPress={onClickEndReading}>
                    <Text style={CommonStyles.holderText}> Fin </Text>
                    <Text style={DatePickerStyles.dateText}>{endDateReading.toLocaleDateString()}</Text>
                    {
                        showEndDate && (
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={endDateReading}
                                minimumDate={startDateReading}
                                mode='date'
                                display="default"
                                onChange={changeEndReading}
                            />
                        )
                    }
                </TouchableOpacity>
            </View>
            <View style={DatePickerStyles.addReadingContainer}>
                <TextIconButton callBack={onClickAddReading} iconName={'plus-box'} iconSize={26} iconColor={COLORS.clickableColor} showText={false} buttonStyle={DatePickerStyles.addReadingButton}/>
            </View>
        </View>
    )
}