import axios from 'axios';
import Book from '../class/Book';
import Client from '../class/Client';
import BaseService from './BaseService';
import { APIBookData } from '../type/Data';
import BookBuilder from '../builders/BookBuilder';
import Reading from '../class/Reading';
import BookSearchCriteriaBuilder from '../builders/BookSearchCriteriaBuilder';

export default class BookService extends BaseService {

    public books: Map<number, Book>;
    public filteredBooks: Map<number, Book>;

    constructor(client: Client) {
        super(client);
        this.books = new Map();
        this.filteredBooks = new Map();
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

    public async fetchFilteredBooks(criteria: BookSearchCriteriaBuilder) {

        const res = await axios.get(`${this.getIp()}/api/book/criteria`, {
            params: {
                c: criteria.toJSON()
            }
        });

        if(res.status === 200) {
            const data: number[] = res.data;

            this.filteredBooks = new Map();
            for(const idBook of data) {
                const book = this.books.get(idBook);
                book && this.filteredBooks.set(book.idBook, book);
            }

            return this.filteredBooks;
        }
    
        return [];
    }

    public async favBook(book: BookBuilder){
        const res = await axios.put(`${this.getIp()}/api/favBook/${book.idBook}/${book.isFav}`);

        const newBook:APIBookData = res.data;

        return this.updateBook(newBook);
    }

    public getFavBooks() {
        const favBooks:Book[] = Array.from(this.books.values()).filter((book) =>
            book.isFav === true
        );

        return favBooks;
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
        const oldFilteredBook = this.filteredBooks.get(data.idBook);
        if(oldBook){
            this.updateReadings(data, oldBook);
            oldBook.update(data);
            return oldBook;
        }
        if(oldFilteredBook) {
            this.updateReadings(data, oldFilteredBook);
            oldFilteredBook.update(data);
            return oldFilteredBook;
        }
    }

    public removeBook(idBook: number){
        this.books.delete(idBook);
        this.filteredBooks.delete(idBook);
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