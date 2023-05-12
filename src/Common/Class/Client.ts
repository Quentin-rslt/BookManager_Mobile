import BookService from '../services/BookService';
import TagService from '../services/TagService';

export default class Client {

    public bookService: BookService;

    public tagService: TagService

    constructor() {
        this.bookService = new BookService(this);
        this.tagService = new TagService(this);
    }

    public async fetchAll() {
        await this.bookService.fetchBooks();
        await this.tagService.fetchTags();
    }
}