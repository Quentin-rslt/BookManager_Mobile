import Base from "./Base";
import Client from "./Client";
import Reading from "./Reading";
import Tag from "./Tag";

export default class Book extends Base {
    public idBook: number;

    public title:string;

    public author: string;
    
    public numberOP: number;

    public notePerso: number;
    
    public releaseYear: string;
    
    public summary: string;
    
    public readings: Array<Reading>;
    
    public tags: Array<Tag>;

    constructor(client:Client, title?:string, author?:string, numberOP?:number, notePerso?:number, releaseYear?:string, summary?:string, readings?: Array<Reading>, tags?: Array<Tag>, idBook?:number) {
        super(client);
        this.idBook=idBook ? idBook : 0;
        this.title=title ? title : "";
        this.author=author ? author : "";
        this.numberOP=numberOP ? numberOP : 0;
        this.notePerso=notePerso ? notePerso : 0;
        this.releaseYear=releaseYear ? releaseYear : "2023";
        this.summary=summary ? summary : "";
        this.readings=readings ? readings : [];
        this.tags=tags ? tags : [];
    }

    public toJSON() {
        return {
            title: this.title,
            author: this.author,
            numberOP: this.numberOP,
            notePerso: this.notePerso,
            releaseYear: this.releaseYear,
            summary: this.summary,
            readings: Array.from(this.readings),
            tags: Array.from(this.tags),
        }
    }
    
    public setIdBook(value: number) {
        this.idBook = value;
        return this;
    }

    public setTitle(value: string) {
        this.title = value;
        return this;
    }

    public setAuthor(value: string) {
        this.author = value;
        return this;
    }

    public setNumberOP(value: number) {
        this.numberOP = value;
        return this;
    }

    public setNotePerso(value: number) {
        this.notePerso = value;
        return this;
    }

    public setReleaseYear(value: string) {
        this.releaseYear = value;
        return this;
    }

    public setSummary(value: string) {
        this.summary = value;
        return this;
    }

    public setReadings(value: Array<Reading>) {
        this.readings = value;
        return this;
    }

    public addReading(value: Reading) {
        this.readings.push(value);
        return this;
    }

    public deleteReading(value: number) {
        this.readings.splice(value, 1);
        return this;
    }

    public setTags(value: Array<Tag>) {
        this.tags = value;
        return this;
    }

    public addTag(value: Tag) {
        this.tags.push(value);
        return this;
    }
} 