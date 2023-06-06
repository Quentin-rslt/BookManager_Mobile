import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import MultiSelect from 'react-native-multiple-select'
import TagsModalStyles from '../../styles/components/Modals/TagsModalStyles';
import TextIconButton from '../Buttons/TextIconButton';
import { COLORS } from '../../library/CommonColors';
import Tag from '../../library/class/Tag';
import TitleScreen from '../TitleScreen';
import BookBuilder from '../../library/builders/BookBuilder';
import { Feather } from '@expo/vector-icons';
import Modal from "react-native-modal";

interface Props {
    book: BookBuilder;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>; 
}

export default function TagsModal({ book, showModal, setShowModal }: Props) {

    const client = book.client;
    const tags = Array.from(client.tagService.tags.values());

    const [selectedTags, setSelectedTags] = useState<number[]>([]);

    const onSelectedItemsChange = (selectedTags:number[]) => {
        const newTags: Tag[]= [];
        setSelectedTags(selectedTags);
 
        for (const selectedTag of selectedTags) {
            const tag = client.tagService.tags.get(+selectedTag);
            tag && newTags.push(tag);
        }

        book.setTags(newTags);
    }

    useEffect(() => {
        for(const tag of book.tags) {
            selectedTags.push(tag.idTag);
        }
    }, []);

    return (
        <Modal 
            style={{ margin: 0 }} 
            isVisible={showModal} 
            onBackdropPress={() => setShowModal(false)} 
            onSwipeComplete={() => setShowModal(false)} 
            swipeDirection={'down'}
        >
            <View style={TagsModalStyles.container}>
                <View style={TagsModalStyles.returnButton}>
                    <Feather name={'minus'} size={65} color={COLORS.accentColor}/>
                </View>
                <View style={TagsModalStyles.multiSelectContainer}> 
                    <View style={{marginBottom: 15}}>
                        <TitleScreen title='Tags'/>
                    </View>
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
                        styleRowList={{backgroundColor: COLORS.background}}
                        hideDropdown={true}
                        noItemsText="Pas de tags trouvés"
                        styleInputGroup={{backgroundColor: COLORS.background, paddingBottom: 5}}
                        styleDropdownMenuSubsection={{backgroundColor: COLORS.background, height: 50, paddingLeft: 5, marginBottom: 20, borderBottomColor: COLORS.foreground}}
                    />
                </View>
                <TextIconButton callBack={() => setShowModal(!showModal)} showIcon={false} text='Valider' buttonStyle={TagsModalStyles.button}/>
            </View>
        </Modal>
    )
}