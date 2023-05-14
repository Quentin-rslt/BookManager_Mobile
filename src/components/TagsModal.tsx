import { Modal, View } from 'react-native'
import React, { useState } from 'react'
import Book from '../Common/Class/Book';
import MultiSelect from 'react-native-multiple-select'
import TagsModalStyles from '../styles/components/TagsModalStyles';
import TextIconButton from './Buttons/TextIconButton';
import Client from '../Common/Class/Client';
import { COLORS } from '../Common/CommonColors';
import Tag from '../Common/Class/Tag';
import TitleScreen from './TitleScreen';

interface Props {
    book: Book;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>; 
}

export default function TagsModal({ book, showModal, setShowModal }: Props) {

    const client = book.client;
    const tags = client.tagService.tags;

    const [selectedTags, setSelectedTags] = useState<string[]>();

    const onSelectedItemsChange = (selectedTags:string[]) => {
        const newTags: Tag[]= [];
        setSelectedTags(selectedTags);
 
        for (const selectedTag of selectedTags) {
            const item = new Tag(client, tags.find(item => item.idTag === +selectedTag)?.textTag);
            newTags.push(item);
        }

        book.setTags(newTags);
    }

    return (
        <Modal style={TagsModalStyles.modalContainer} animationType="slide" transparent={true} visible={showModal} onRequestClose={() => setShowModal(!showModal)}>
            <View style={TagsModalStyles.container}>
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
                        styleRowList={{backgroundColor: COLORS.componentBackground}}
                        hideDropdown={true}
                        noItemsText="Pas de tags trouvés"
                        styleInputGroup={{backgroundColor: COLORS.componentBackground, paddingBottom: 5}}
                        styleDropdownMenuSubsection={{backgroundColor: COLORS.componentBackground, height: 50, paddingLeft: 5, marginBottom: 20, borderBottomColor: COLORS.foreground}}
                    />
                </View>
                <TextIconButton callBack={() => setShowModal(!showModal)} showIcon={false} text='Valider' buttonStyle={TagsModalStyles.button}/>
            </View>
        </Modal>
    )
}