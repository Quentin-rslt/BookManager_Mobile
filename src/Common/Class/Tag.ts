import Base from "./Base";
import Book from "./Book";
import Client from "./Client";

export default class Tag extends Base {
    public idTag: number;
    
    public textTag: string;
    
    public colorTag: number;


    constructor(client:Client, textTag?:string, colorTag?:number, idTag?:number) {
        super(client);
        this.idTag=idTag ? idTag : 0;
        this.textTag=textTag ? textTag : "";
        this.colorTag=colorTag ? colorTag : 0;
    }

    get books(){
        const books = new Map<number, Book>();
        
        for(const b of this.client.bookService.books.values()){
            for(const t of b.tags){
                if(t.idTag === this.idTag) {
                    books.set(b.idBook, b);
                }
            }
        }

        return books;
    }

    public toJSON() {
        return {
            idTag: this.idTag,
            textTag: this.textTag,
            colorTag: this.colorTag,
        }
    }

    public setTextTag(value: string){
        this.textTag = value;
        return this;
    }
}