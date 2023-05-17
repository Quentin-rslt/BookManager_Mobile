import TagBookService from "../services/TagBookService";
import Base from "./Base";
import Book from "./Book";
import Client from "./Client";

export default class Tag extends Base {
    public idTag: number;
    
    public textTag: string;
    
    public colorTag: number;

    public tagBooksService: TagBookService;


    constructor(client:Client, textTag?:string, colorTag?:number, idTag?:number) {
        super(client);
        this.idTag=idTag ? idTag : 0;
        this.textTag=textTag ? textTag : "";
        this.colorTag=colorTag ? colorTag : 0;

        this.tagBooksService = new TagBookService(this);
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