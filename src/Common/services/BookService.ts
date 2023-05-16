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
        const res = await axios.post(`${this.getIp()}/api/addBook`, data);

        const newBook:Book = res.data;
        
        await this.client.tagService.setTags([...this.client.tagService.tags]);
        
        return this.addBook(newBook);
    }

    public async deleteBook(book: Book) {
        await axios.delete(`${this.getIp()}/api/deleteBook/${book.idBook}`);

        this.removeBook(book.idBook);
        await this.client.tagService.setTags([...this.client.tagService.tags]);
    }

    public addBook(b:Book){
        const book = new Book(this.client, b.title, b.author, b.numberOP, b.notePerso, b.releaseYear, b.summary, b.readings, b.tags, b.idBook);
        this.books.push(book);

        return book;
    }

    public removeBook(idBook:number){
        this.books.splice(idBook, 1);
    }

    public setBooks(books:Book[]){
        this.books = new Array();

        for(const b of books){
            this.addBook(b);
        }

        return this.books;
    }
}