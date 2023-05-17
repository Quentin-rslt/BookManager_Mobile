import Book from '../Class/Book';
import Tag from '../Class/Tag';
import BaseService from './BaseService';

export default class BookTagService extends BaseService {

    public book:Book;

    public tags:Map<number, Tag>;

    constructor(book: Book){
        super(book.client);
        this.book = book;
        this.tags = new Map();

        this.refresh();
    }

    public refresh() {
        for(const t of this.book.data.tags) {
            const tag = this.client.tagService.tags.get(t.idTag);
            if(tag) {
                this.tags.set(tag.idTag, tag);
            }
        }
    }

    /** Set an array of categories for this resource */
    public set(tags: Tag[]) {
        this.tags.clear();
        for(const t of tags) {
            this.tags.set(t.idTag, t);
        }
    }
}