import axios from 'axios';
import Book from '../class/Book';
import Client from '../class/Client';
import BaseService from './BaseService';
import { APIBookData } from '../type/Data';
import BookBuilder from '../builders/BookBuilder';

export default class BookService extends BaseService {

    public books:Map<number, Book>;

    constructor(client: Client) {
        super(client);
        this.books = new Map();
    }

    public async fetchBooks(){
        const res = (await axios.get(`${this.getIp()}/api/book/all`));

        if(res.status === 200) {
            const data: APIBookData[] = res.data
            this.books = new Map();
            for(const book of data) {
                this.addBook(book);
            }

            return this.books;
        }
    
        return new Map();
    }
    
    public async createBook(book: BookBuilder) {
        const data = book.toJSON();
        const res = await axios.post(`${this.getIp()}/api/addBook`, data);

        const newBook:APIBookData = res.data;
        
        return this.addBook(newBook);
    }

    public async editBook(book: BookBuilder){
        const data = book.toJSON();
        const res = await axios.put(`${this.getIp()}/api/updateBook/${book.idBook}`, data);

        const newBook:APIBookData = res.data;

        return this.updateBook(newBook);
    }

    public async deleteBook(book: Book) {
        await axios.delete(`${this.getIp()}/api/deleteBook/${book.idBook}`);

        this.removeBook(book.idBook);
    }

    public addBook(data:APIBookData){
        const book = new Book(this.client, data);
        this.books.set(book.idBook, book);
        return book;
    }

    public updateBook(data:APIBookData){
        const book = this.books.get(data.idBook);
        if(book){
            book.update(data);
            return book;
        }
    }

    public removeBook(idBook:number){
        this.books.delete(idBook);
    }
}