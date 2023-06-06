import { Modal, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ColorModalStyles from '../../styles/components/Modals/ColorModalStyles';
import TextIconButton from '../Buttons/TextIconButton';
import { COLORS } from '../../library/CommonColors';
import Tag from '../../library/class/Tag';
import TitleScreen from '../TitleScreen';
import { Feather } from '@expo/vector-icons';
import GestureRecognizer from 'react-native-swipe-gestures';
import ColorPicker from 'react-native-wheel-color-picker';
import TagBuilder from '../../library/builders/TagBuilder';

interface Props {
    tag: TagBuilder;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>; 
}

export default function ColorModal({ tag, showModal, setShowModal }: Props) {

    const onSelectColor = ( hex: any ) => {
        tag.setColorTag(hex);
    };

    return (
        <GestureRecognizer style={{flex: 1}} onSwipeDown={ () => setShowModal(false) }>
            <Modal style={ColorModalStyles.modalContainer} animationType="slide" transparent={true} visible={showModal} onRequestClose={() => setShowModal(!showModal)}>
                <View style={ColorModalStyles.container}>
                    <View style={ColorModalStyles.returnButton}>
                        <Feather name={'minus'} size={65} color={COLORS.accentColor}/>
                    </View>
                    <View style={ColorModalStyles.colorPicker}> 
                        <ColorPicker
                            onColorChangeComplete={onSelectColor}
                            color = {tag.colorTag}
                            swatches = {true}
                            onColorChange = {onSelectColor}
                            thumbSize={30}
                            sliderSize={40}
                            noSnap={false}
                            row={false}
                        />
                    </View>
                    <TextIconButton callBack={() => setShowModal(!showModal)} showIcon={false} text='Valider' buttonStyle={ColorModalStyles.button}/>
                </View>
            </Modal>
        </GestureRecognizer>
    )
}