import Base from "../class/Base";
import Client from "../class/Client";
import Tag from "../class/Tag";
import ReadingBuilder from "./ReadingBuilder";

export interface BookDataBuilder {
    idBook: number;
    title:string;
    author: string;
    numberOP: number;
    notePerso: number;
    releaseYear: number;
    summary: string;
    isFav: boolean;
    readings: Array<ReadingBuilder>;
    tags: Array<Tag>;
}

export default class BookBuilder extends Base {
    public idBook: number;

    public title:string;

    public author: string;
    
    public numberOP: number;

    public notePerso: number;
    
    public releaseYear: number;
    
    public summary: string;
    
    public isFav: boolean;
    
    public readings: Array<ReadingBuilder>;
    
    public tags: Array<Tag>;

    constructor(client:Client, data?: BookDataBuilder) {
        super(client);
        this.idBook = data?.idBook ?? 0;
        this.title = data?.title ?? "";
        this.author = data?.author ?? "";
        this.numberOP = data?.numberOP ?? 0;
        this.notePerso = data?.notePerso ?? 0;
        this.releaseYear = data?.releaseYear ?? 2023;
        this.summary = data?.summary ?? "";
        this.isFav = data?.isFav ?? false;
        this.readings = data?.readings ?? [];
        this.tags = data?.tags ?? [];
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
            fav: this.isFav,
            readings: this.readings,
            tags: this.tags,
        }
    }
    
    public setIdBook(idBook: number) {
        this.idBook = idBook;
        return this;
    }

    public setTitle(title: string) {
        this.title = title;
        return this;
    }

    public setAuthor(author: string) {
        this.author = author;
        return this;
    }

    public setNumberOP(numberOP: number) {
        this.numberOP = numberOP;
        return this;
    }

    public setNotePerso(notePerso: number) {
        this.notePerso = notePerso;
        return this;
    }

    public setReleaseYear(releaseYear: number) {
        this.releaseYear = releaseYear;
        return this;
    }

    public setIsFav(isFav: boolean) {
        this.isFav = isFav;
        return this;
    }

    public setSummary(summary: string) {
        this.summary = summary;
        return this;
    }

    public setReadings(readings: Array<ReadingBuilder>) {
        this.readings = readings;
        return this;
    }

    public addReading(readings: ReadingBuilder) {
        this.readings.push(readings);
        return this;
    }

    public deleteReading(readings: number) {
        this.readings.splice(readings, 1);
        return this;
    }

    public setTags(tags: Tag[]) {
        this.tags  = tags;
        return this;
    }
} 