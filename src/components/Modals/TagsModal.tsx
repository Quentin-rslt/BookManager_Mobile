import { Modal, View } from 'react-native'
import React, { useState } from 'react'
import Book from '../../Common/Class/Book';
import MultiSelect from 'react-native-multiple-select'
import TagsModalStyles from '../../styles/components/Modals/TagsModalStyles';
import TextIconButton from '../Buttons/TextIconButton';
import { COLORS } from '../../Common/CommonColors';
import Tag from '../../Common/Class/Tag';
import TitleScreen from '../TitleScreen';
import BookBuilder from '../../Common/Class/BookBuilder';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import GestureRecognizer from 'react-native-swipe-gestures';
import BookTagService from '../../Common/services/BookTagService';

interface Props {
    book: BookBuilder;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>; 
}

export default function TagsModal({ book, showModal, setShowModal }: Props) {

    const client = book.client;
    const tags = Array.from(client.tagService.tags.values());

    const [selectedTags, setSelectedTags] = useState<string[]>();

    const onSelectedItemsChange = (selectedTags:string[]) => {
        const newTags: Tag[]= [];
        setSelectedTags(selectedTags);
 
        for (const selectedTag of selectedTags) {
            const tag = client.tagService.tags.get(+selectedTag);
            tag && newTags.push(tag);
        }
        
        book.setTags(newTags);
    }

    return (
        <GestureRecognizer style={{flex: 1}} onSwipeDown={ () => setShowModal(false) }>
            <Modal animationType="slide" transparent={true} visible={showModal} onRequestClose={() => setShowModal(!showModal)}>
                <View style={TagsModalStyles.container}>
                    <View style={TagsModalStyles.returnButton}>
                        <MaterialCommunityIcons name={'minus'} size={35} color={COLORS.accentColor}/>
                    </View>
                    <TitleScreen title='Tags'/>
                    <View style={TagsModalStyles.multiSelectContainer}> 
                        <MultiSelect
                            fixedHeight={true}
                            items={tags}
                            displayKey="textTag"
                            uniqueKey="idTag"
                            onSelectedItemsChange={onSelectedItemsChange}
                            selectedItems={selectedTags}
                            selectText="Sélectioner un tag"
                            searchInputPlaceholderText="Chercher un tag..."
                            textColor={COLORS.foregroundHolder}
                            tagRemoveIconColor={COLORS.accentColor}
                            tagBorderColor={COLORS.foreground}
                            tagTextColor={COLORS.foreground}
                            selectedItemTextColor={COLORS.accentColor}
                            selectedItemIconColor={COLORS.accentColor}
                            itemTextColor={COLORS.foreground}
                            hideSubmitButton={true}
                            styleRowList={{backgroundColor: COLORS.backgroundLight}}
                            hideDropdown={true}
                            noItemsText="Pas de tags trouvés"
                            styleInputGroup={{backgroundColor: COLORS.backgroundLight, paddingBottom: 5}}
                            styleDropdownMenuSubsection={{backgroundColor: COLORS.backgroundLight, height: 50, paddingLeft: 5, marginBottom: 20, borderBottomColor: COLORS.foreground}}
                        />
                    </View>
                    <TextIconButton callBack={() => setShowModal(!showModal)} showIcon={false} text='Valider' buttonStyle={TagsModalStyles.button}/>
                </View>
            </Modal>
        </GestureRecognizer>
    )
}