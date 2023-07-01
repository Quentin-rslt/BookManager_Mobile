import { APITagData } from "../type/Data";
import Base from "./Base";
import Book from "./Book";
import Client from "./Client";

export default class Tag extends Base {
    
    public data: APITagData;

    public idTag: number;
    
    public textTag: string;
    
    public colorTag: string;

    constructor(client:Client, data: APITagData) {
        super(client);
        this.data = data;
        this.idTag = data.idTag;
        this.textTag = data.textTag;
        this.colorTag = data.colorTag;
    }

    public toJSON() {
        return {
            idTag: this.idTag,
            textTag: this.textTag,
            colorTag: this.colorTag,
            books: this.books,
        }
    }

    public update(data: APITagData){
        this.data = data;
        this.idTag = data.idTag;
        this.textTag = data.textTag;
        this.colorTag = data.colorTag;
    }

    get books(){
        const books = new Map<number, Book>();
        
        for(const b of this.client.bookService.books.values()){
            for(const t of b.tags.values()){
                if(t.idTag === this.idTag) {
                    books.set(b.idBook, b);
                }
            }
        }

        return books;
    }

    public getBooks(){
        return Array.from(this.books.values()).sort((a, b) =>
            a.idBook - b.idBook
        );
    }
}