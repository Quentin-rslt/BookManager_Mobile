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
    client: Client;
    book: Book;
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>; 
}

export default function TagsModal({ client, book, showModal, setShowModal }: Props) {
    const items = client.tagService.toJSON();

    const [ selectedItems, setSelectedItems ] = useState<string[]>();

    const onSelectedItemsChange = (selectedItems:string[]) => {
        const newTags: Tag[]= [];
        setSelectedItems(selectedItems);
 
        for (let i = 0; i < selectedItems.length; i++) {
            const item = new Tag(items.find(item => item.id === +selectedItems[i])?.textTag);
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
                        items={items}
                        displayKey="textTag"
                        uniqueKey="id"
                        onSelectedItemsChange={onSelectedItemsChange}
                        selectedItems={selectedItems}
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
                <TextIconButton callBack={() => setShowModal(!showModal)} showIcon={false} text='Valider' containerStyle={TagsModalStyles.button}/>
            </View>
        </Modal>
    )
}