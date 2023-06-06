export interface APIBookData {
    idBook: number;
    title:string;
    author: string;
    numberOP: number;
    notePerso: number;
    releaseYear: string;
    summary: string;
    isFav: boolean;
    readings: APIBookReading[];
    tags: APIBookTag[];
}
export type APITagBook = Omit<APIBookData, "tags">;

export interface APIReadingData {
    idReading: number;
    startReadingDate: Date;
    endReadingDate: Date;
    book: APIBookData;
}
export type APIBookReading = Omit<APIReadingData, "book">;

export interface APITagData {
    idTag: number;
    textTag: string;
    colorTag: string;
    books: APITagBook[];
}
export type APIBookTag = Omit<APITagData, "books">;