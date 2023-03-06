import Reading from "./Reading";
import Tag from "./Tag";

export default class Book {
    public idBook:number|undefined;

    public title:string;

    public author:string;
    
    public numberOP:number;
    
    public notePerso:number;
    
    public releaseYear:string;
    
    public summary:string;
    
    public readings:Array<Reading>;
    
    public tags:Array<Tag>;

    constructor(title:string, author:string, numberOP:number, notePerso:number, releaseYear:string, summary:string, readings: Array<Reading>, tags: Array<Tag>, idBook?:number) {
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
}