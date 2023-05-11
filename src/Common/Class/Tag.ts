import Base from "./Base";
import Book from "./Book";
import Client from "./Client";

export default class Tag extends Base{
    public idTag: number;
    
    public textTag: string;
    
    public colorTag: number;

    public books: Book[];

    constructor(client:Client, textTag?:string, colorTag?:number, idTag?:number, books?:Book[]) {
        super(client);
        this.idTag=idTag ? idTag : 0;
        this.textTag=textTag ? textTag : "";
        this.colorTag=colorTag ? colorTag : 0;
        this.books=books ? books : [];
    }
}