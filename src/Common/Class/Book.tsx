import Reading from "./Reading";
import Tag from "./Tag";

export default class Book {
    public idBook: number;

    public title:string;

    public author: string;
    
    public numberOP: number;

    public notePerso: number;
    
    public releaseYear: string;
    
    public summary: string;
    
    public readings: Array<Reading>;
    
    public tags: Array<Tag>;

    constructor(title:string, author:string, numberOP:number, notePerso:number, releaseYear:string, summary:string, readings: Array<Reading>, tags: Array<Tag>, idBook:number) {
        this.idBook=idBook;
        this.title=title;
        this.author=author;
        this.numberOP=numberOP;
        this.notePerso=notePerso;
        this.releaseYear=releaseYear;
        this.summary=summary;
        this.readings=readings;
        this.tags=tags;
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
    }

    public setTitle(value: string) {
        this.title = value;
    }

    public setAuthor(value: string) {
        this.author = value;
    }

    public setNumberOP(value: number) {
        this.numberOP = value;
    }

    public setNotePerso(value: number) {
        this.notePerso = value;
    }

    public setReleaseYear(value: string) {
        this.releaseYear = value;
    }

    public setSummary(value: string) {
        this.summary = value;
    }

    public setReadings(value: Array<Reading>) {
        this.readings = value;
    }

    public setTags(value: Array<Tag>) {
        this.tags = value;
    }
} 