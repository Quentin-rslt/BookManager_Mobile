import React from 'react'
import BookModal from './BookModal'
import TagModal from './TagModal'
import Book from '../../Common/Class/Book';
import Tag from '../../Common/Class/Tag';

interface Props {
    showModalBook: boolean;
    setShowModalBook: React.SetStateAction<boolean>;
    showModalTag: boolean;
    setShowModalTag: React.SetStateAction<boolean>;
    book: Book;
    tag: Tag;
    onRefresh: void | Promise<void>;
    navigation: any;
}

export default function ModalWrapper({showModalBook, setShowModalBook, showModalTag, setShowModalTag, book, tag, onRefresh, navigation}: Props) {
    return (
        <>
            <BookModal book={book} showModalBook={false} setShowModalBook={function (value: React.SetStateAction<boolean>): void {
                throw new Error('Function not implemented.')
            } } onRefresh={function (): void | Promise<void> {
                throw new Error('Function not implemented.')
            } } navigation={undefined}/>
            <TagModal tag={undefined} showModalTag={false} setShowModalTag={function (value: React.SetStateAction<boolean>): void {
                throw new Error('Function not implemented.')
            } } onRefresh={function (): void | Promise<void> {
                throw new Error('Function not implemented.')
            } } navigation={undefined}/>
        </>
    )
}