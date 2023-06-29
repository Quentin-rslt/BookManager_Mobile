import Base from "../class/Base";
import Client from "../class/Client";

export default class BookSearchCriteriaBuilder extends Base {

    public title: string;

    public author: string;
    
    public numberOPStart: number;

    public numberOPEnd: number;

    public notePersoStart: number;

    public notePersoEnd: number;
    
    public releaseYearStart: number;

    public releaseYearEnd: number;
    
    public summary: string;
    
    public isFav: boolean;

    constructor(client: Client) {
        super(client);
        this.title = "";
        this.author = "";
        this.numberOPStart = 0;
        this.numberOPEnd = 10000;
        this.notePersoStart = 0;
        this.notePersoEnd = 5;
        this.releaseYearStart = 0;
        this.releaseYearEnd = new Date().getFullYear();
        this.summary = "";
        this.isFav = false;
    }

    public toJSON() {
        return `{"title":"${this.title}","author":"${this.author}","numberOPStart":"${this.numberOPStart}","numberOPEnd":"${this.numberOPEnd}","notePersoStart":"${this.notePersoStart}","notePersoEnd":"${this.notePersoEnd} ","releaseYearStart":"${this.releaseYearStart}","releaseYearEnd":"${this.releaseYearEnd}","summary":"${this.summary}","fav":"${this.isFav}"}` 
    }
}