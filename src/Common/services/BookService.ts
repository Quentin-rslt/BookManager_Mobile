import axios from 'axios';
import Book from '../Class/Book';
import Client from '../Class/Client';
import BaseService from './BaseService';

export default class BookService extends BaseService {

    public books:Book[];

    constructor(client: Client) {
        super(client);
        this.books = new Array<Book>();
    }

    public async fetchBooks(){
        const res = await axios.get(`${this.getIp()}/api/book/all`);
        
        if(res.status === 200) {
            const books: Book[] = await res.data;
            this.setBooks([...books]);
            return this.books;
        }
    
        return [];
    }
    
    public async createBook(book: Book) {
        const data = book.toJSON();
        await axios.post(`${this.getIp()}/api/addBook`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.addBook(book);
        await this.client.tagService.setTags([...this.client.tagService.tags])

        return this.books;
    }

    public addBook(b:Book){
        const book = new Book(this.client, b.title, b.author, b.numberOP, b.notePerso, b.releaseYear, b.summary, b.readings, b.tags, b.idBook);
        this.books.push(book);
    }

    public setBooks(value:Book[]){
        this.books = value;

        return this.books;
    }
}