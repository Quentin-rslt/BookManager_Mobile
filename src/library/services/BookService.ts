import axios from 'axios';
import Book from '../class/Book';
import Client from '../class/Client';
import BaseService from './BaseService';
import { APIBookData } from '../type/Data';
import BookBuilder from '../builders/BookBuilder';
import ReadingBuilder from '../builders/ReadingBuilder';
import Reading from '../class/Reading';

export default class BookService extends BaseService {

    public books: Map<number, Book>;

    constructor(client: Client) {
        super(client);
        this.books = new Map();
    }

    public async fetchBooks(){
        const res = (await axios.get(`${this.getIp()}/api/book/all`));

        if(res.status === 200) {
            const data: APIBookData[] = res.data;
            
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

        this.deleteReadings(book);
        this.removeBook(book.idBook);
    }

    public addBook(data: APIBookData){
        const book = new Book(this.client, data);
        
        this.books.set(book.idBook, book);
        this.addReadings(data);

        return book;
    }

    public updateBook(data: APIBookData){
        const oldBook = this.books.get(data.idBook);
        if(oldBook){
            this.updateReadings(data, oldBook);
            oldBook.update(data);
            return oldBook;
        }
    }

    public removeBook(idBook: number){
        this.books.delete(idBook);
    }

    public addReadings(book: APIBookData){
        for(const reading of book.readings){
            const r = new Reading(this.client);
            r.setIdReading(reading.idReading);
            r.setStartReadingDate(reading.startReadingDate);
            r.setEndReadingDate(reading.endReadingDate);

            this.client.readingService.readings.set(reading.idReading, r);
        }
    }

    public deleteReadings(book: Book){
        for(const reading of book.readings.values()){
            this.client.readingService.removeReading(reading.idReading);
        }
    }

    public updateReadings(data: APIBookData, oldBook: Book){
        this.deleteReadings(oldBook);
        this.addReadings(data);
    }
}