import { APITagData } from "../Type/Data";
import Base from "./Base";
import Book from "./Book";
import Client from "./Client";

export default class Tag extends Base {
    public data: APITagData;

    public idTag: number;
    
    public textTag: string;
    
    public colorTag: number;


    constructor(client:Client, data: APITagData) {
        super(client);
        this.data = data;
        this.idTag = data.idTag ? data.idTag : 0;
        this.textTag = data.textTag ? data.textTag : "";
        this.colorTag = data.colorTag ? data.colorTag : 0;
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
}