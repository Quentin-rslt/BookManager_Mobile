import Book from '../Class/Book';
import Tag from '../Class/Tag';
import BaseService from './BaseService';

export default class TagBookService extends BaseService {

    public tag: Tag;
    
    constructor(tag:Tag) {
        super(tag.client);
        this.tag = tag;
    }

    get books(){
        const books = new Map<number, Book>();
        
        for(const b of this.client.bookService.books.values()){
            for(const t of b.bookTagsService.tags.values()){
                if(t.idTag === this.tag.idTag) {
                    books.set(b.idBook, b);
                }
            }
        }

        return books;
    }
}