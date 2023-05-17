export interface APIBookData {
    idBook: number;
    title:string;
    author: string;
    numberOP: number;
    notePerso: number;
    releaseYear: string;
    summary: string;
    readings: APIReadingData[];
    
    tags: APIBookTag[];
}
export type APITagBook = Omit<APIBookData, "tags">;

export interface APIReadingData {
    idReading:number;
    startReadingDate:Date;
    endReadingDate:Date;
}

export interface APITagData {
    idTag: number;
    textTag: string;
    colorTag: number;

    books: APITagBook[];
}
export type APIBookTag = Omit<APITagData, "books">;