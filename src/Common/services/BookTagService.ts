import Book from '../Class/Book';
import Tag from '../Class/Tag';
import BaseService from './BaseService';

export default class BookTagService extends BaseService {

    public book:Book;

    constructor(book: Book){
        super(book.client);
        this.book = book;
    }

    get tags(){
        const tags = new Map<number, Tag>();

        for(const t of this.book.data.tags) {
            const tag = this.client.tagService.tags.get(t.idTag);
            if(tag) {
                tags.set(tag.idTag, tag);
            }
        }
        
        return tags;
    }

    public remove(tag: Tag) {
        this.tags.delete(tag.idTag);
    }
}