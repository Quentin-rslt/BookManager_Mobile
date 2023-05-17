import { APITagData } from "../Type/Data";
import TagBookService from "../services/TagBookService";
import Base from "./Base";
import Client from "./Client";

export default class Tag extends Base {
    public idTag: number;
    
    public textTag: string;
    
    public colorTag: number;

    public tagBooksService: TagBookService;


    constructor(client:Client, data: APITagData) {
        super(client);
        this.idTag = data.idTag ? data.idTag : 0;
        this.textTag = data.textTag ? data.textTag : "";
        this.colorTag = data.colorTag ? data.colorTag : 0;

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