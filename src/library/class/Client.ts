import BookSearchCriteriaBuilder from '../builders/BookSearchCriteriaBuilder';
import BookService from '../services/BookService';
import ReadingService from '../services/ReadingService';
import TagService from '../services/TagService';

export default class Client {

    public bookService: BookService;

    public tagService: TagService;

    public readingService: ReadingService;

    public criteriaSearchBooks: BookSearchCriteriaBuilder;

    constructor() {
        this.bookService = new BookService(this);
        this.readingService = new ReadingService(this);
        this.tagService = new TagService(this);
        this.criteriaSearchBooks = new BookSearchCriteriaBuilder(this);
    }

    public async fetchAll() {
        await this.tagService.fetchTags();
        await this.readingService.fetchReadings();
        await this.bookService.fetchBooks();
    }
}