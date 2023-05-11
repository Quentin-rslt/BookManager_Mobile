import Book from '../Class/Book';
import Client from '../Class/Client';
import Tag from '../Class/Tag';
import BaseService from './BaseService';

export default class BookService extends BaseService {

    public books:Book[];

    constructor(client: Client) {
        super(client);
        this.books = new Array<Book>;
    }

    public async fetchBooks(){

        const res = await fetch("http://192.168.0.34:9000/api/book/all");
    
        if(res.ok) {
            const data: Book[] = await res.json();
            return this.setBooks([...data]);
        }
    
        return [];
    }
    
    public async createBook(data: string) {
        await fetch('http://192.168.0.34:9000/api/addBook', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: data,
        });
    }

    public setBooks(value:Book[]){
        this.books = value;
        return this;
    }
}