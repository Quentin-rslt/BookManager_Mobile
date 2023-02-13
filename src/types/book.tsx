import Reading from "./Reading";
import Tag from "./tag";

export default interface Book {
    idBook: number;
    title: string;
    author: string;
    numberOP: number;
    notePerso: number;
    releaseYear: string;
    summary: string;
    readings: Array<Reading>;
    tags: Array<Tag>;
}