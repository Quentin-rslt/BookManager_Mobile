import { APIBookData } from "../type/Data";
import Base from "./Base";
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

    constructor(client:Client, data: APIBookData) {
        super(client);
        this.data = data;
        this.idBook = data.idBook;
        this.title = data.title;
        this.author = data.author;
        this.numberOP = data.numberOP;
        this.notePerso = data.notePerso;
        this.releaseYear = data.releaseYear;
        this.summary = data.summary;
        this.readings = data.readings;
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
            tags: Array.from(this.tags.values()),
        }
    }

    public update(data: APIBookData){
        this.data = data;
        this.idBook = data.idBook;
        this.title = data.title;
        this.author = data.author;
        this.numberOP = data.numberOP;
        this.notePerso = data.notePerso;
        this.releaseYear = data.releaseYear;
        this.summary = data.summary;
        this.readings = data.readings;
    }

    get tags(){
        const tags = new Map<number, Tag>();

        for(const t of this.data.tags) {
            const tag = this.client.tagService.tags.get(t.idTag);
            if(tag) {
                tags.set(tag.idTag, tag);
            }
        }
        
        return tags;
    }
} 