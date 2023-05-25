import Base from "./Base";
import Client from "./Client";
import Reading from "./Reading";
import Tag from "./Tag";

export interface BookDataBuilder {
    idBook: number;
    title:string;
    author: string;
    numberOP: number;
    notePerso: number;
    releaseYear: string;
    summary: string;
    readings: Array<Reading>;
    tags: Array<Tag>;
}

export default class BookBuilder extends Base {
    public idBook: number;

    public title:string;

    public author: string;
    
    public numberOP: number;

    public notePerso: number;
    
    public releaseYear: string;
    
    public summary: string;
    
    public readings: Array<Reading>;
    
    public tags: Array<Tag>;

    constructor(client:Client, data?: BookDataBuilder) {
        super(client);
        this.idBook=data?.idBook ?? 0;
        this.title=data?.title ?? "";
        this.author=data?.author ?? "";
        this.numberOP=data?.numberOP ?? 0;
        this.notePerso=data?.notePerso ?? 0;
        this.releaseYear=data?.releaseYear ?? "2023";
        this.summary=data?.summary ?? "";
        this.readings=data?.readings ?? [];
        this.tags=data?.tags ?? [];
    }

    public toJSON() {
        return {
            idBook : this.idBook,
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

    public setTags(value: Tag[]) {
        this.tags  = value;
        return this;
    }
} 