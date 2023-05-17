import axios from 'axios';
import Book from '../Class/Book';
import Client from '../Class/Client';
import BaseService from './BaseService';
import { APIBookData } from '../Type/Data';

export default class BookService extends BaseService {

    public books:Map<number, Book>;

    constructor(client: Client) {
        super(client);
        this.books = new Map();
    }

    public async fetchBooks(){
        const res: APIBookData[] = (await axios.get(`${this.getIp()}/api/book/all`)).data;

        if(res) {
            this.books = new Map();
            for(const book of res) {
                this.addBook(book);
            }
            

            return this.books;
        }
    
        return new Map();
    }
    
    public async createBook(book: Book) {
        const data = book.toJSON();
        const res = await axios.post(`${this.getIp()}/api/addBook`, data);

        const newBook:APIBookData = res.data;
        
        return this.addBook(newBook);
    }

    public async deleteBook(book: Book) {
        await axios.delete(`${this.getIp()}/api/deleteBook/${book.idBook}`);

        this.removeBook(book.idBook);
    }

    public addBook(b:APIBookData){
        const book = new Book(this.client, b);
        this.books.set(book.idBook, book);
        return book;
    }

    public removeBook(idBook:number){
        this.books.delete(idBook);
    }
}