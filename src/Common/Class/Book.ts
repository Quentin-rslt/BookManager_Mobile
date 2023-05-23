import { APIBookData } from "../Type/Data";
import BookTagService from "../services/BookTagService";
import Base from "./Base";
import BookBuilder from "./BookBuilder";
import Client from "./Client";
import Reading from "./Reading";
import Tag from "./Tag";

export default class Book extends Base {
    public data: APIBookData;

    public idBook: number;

    public title:string;

    public author: string;
    
    public numberOP: number;

    public notePerso: number;
    
    public releaseYear: string;
    
    public summary: string;
    
    public readings: Array<Reading>;
    
    public bookTagsService: BookTagService;

    constructor(client:Client, data: APIBookData) {
        super(client);
        this.data = data;
        this.idBook = data.idBook ? data.idBook : 0;
        this.title = data.title ? data.title : "";
        this.author = data.author ? data.author : "";
        this.numberOP = data.numberOP ? data.numberOP : 0;
        this.notePerso = data.notePerso ? data.notePerso : 0;
        this.releaseYear = data.releaseYear ? data.releaseYear : "2023";
        this.summary = data.summary ? data.summary : "";
        this.readings = data.readings ? data.readings : [];
        
        this.bookTagsService = new BookTagService(this);
    }

    public toJSON() {
        return {
            idBook: this.idBook,
            title: this.title,
            author: this.author,
            numberOP: this.numberOP,
            notePerso: this.notePerso,
            releaseYear: this.releaseYear,
            summary: this.summary,
            readings: Array.from(this.readings),
            tags: Array.from(this.bookTagsService.tags.values()),
        }
    }

    public update(data: APIBookData){
        this.data =data;
        this.idBook = data.idBook;
        this.title = data.title;
        this.author = data.author;
        this.numberOP = data.numberOP;
        this.notePerso = data.notePerso;
        this.releaseYear = data.releaseYear;
        this.summary = data.summary;
        this.readings = data.readings;
        
        this.bookTagsService = new BookTagService(this);
    }
} 