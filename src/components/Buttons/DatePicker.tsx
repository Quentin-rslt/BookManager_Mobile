import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DatePickerStyles from '../../styles/components/Buttons/DatePickerStyles';
import Reading from '../../library/class/Reading';
import TextIconButton from './TextIconButton';
import CommonStyles from '../../styles/CommonStyles';
import DateTimePicker from '@react-native-community/datetimepicker';
import { COLORS } from '../../library/CommonColors';
import BookBuilder from '../../library/builders/BookBuilder';
import ReadingBuilder from '../../library/builders/ReadingBuilder';

interface Props {
    book: BookBuilder;
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
        const reading:ReadingBuilder = new ReadingBuilder(book.client);
        reading.setStartReadingDate(startDateReading);
        reading.setEndReadingDate(endDateReading);

        book.addReading(reading);
        setRefresh(!refresh);
    }

    return (
        <View style={DatePickerStyles.container}>
            <View style={DatePickerStyles.datesContainer}>
                <TouchableOpacity style={DatePickerStyles.dateContainer} onPress={onClickStartReading}>
                    <Text style={DatePickerStyles.holderText}> Début </Text>
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
                    <Text style={DatePickerStyles.holderText}> Fin </Text>
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
                <TextIconButton callBack={onClickAddReading} iconName={'plus'} iconSize={26} iconColor={COLORS.accentColor} showText={false} buttonStyle={DatePickerStyles.addReadingButton}/>
            </View>
        </View>
    )
}