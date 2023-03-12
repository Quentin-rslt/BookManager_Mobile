import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import DatePickerStyles from '../../styles/components/Buttons/DatePickerStyles';
import Reading from '../../Common/Class/Reading';
import TextIconButton from './TextIconButton';
import CommonStyles from '../../styles/CommonStyles';
import DateTimePicker from '@react-native-community/datetimepicker';

interface Props {
    readings: Reading[];
    setReadings: React.Dispatch<React.SetStateAction<Reading[]>>
}

export default function DatesPickers({readings, setReadings} : Props) {
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
        readings.push(new Reading(startDateReading, endDateReading));
        const newReadings = Array.from(readings);
        setReadings(newReadings);
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
                <TextIconButton callBack={onClickAddReading} nameIcon={'plus'} size={15} showText={false} containerStyle={DatePickerStyles.addReadingButton}/>
            </View>
        </View>
    )
}