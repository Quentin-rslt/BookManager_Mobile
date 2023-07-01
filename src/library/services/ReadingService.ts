import axios from "axios";
import Client from "../class/Client";
import Reading from "../class/Reading";
import BaseService from "./BaseService";
import { APIReadingData } from "../type/Data";
import Book from "../class/Book";

export default class ReadingService extends BaseService {

    public readings: Map<number, Reading>;

    constructor(client: Client) {
        super(client);
        this.readings = new Map();
    }

    public async fetchReadings(){
        const res = (await axios.get(`${this.getIp()}/api/reading/all`));

        if(res.status === 200) {
            const data: APIReadingData[] = res.data
            this.readings = new Map();
            for(const reading of data) {
                this.addReading(reading);
            }

            return this.readings;
        }
    
        return new Map();
    }

    public getReadings(){
        return Array.from(this.readings.values()).sort((a, b) =>
            a.idReading - b.idReading
        );
    }

    public getRecentBooksRead() {
        const recentBooks = new Map<number, Book>();

        for(const reading of Array.from(this.readings.values()).sort((a:Reading, b:Reading) => new Date(b.endReadingDate).getTime() - new Date(a.endReadingDate).getTime())) {
            for(const book of recentBooks.values()) {
                if(reading.book && book.idBook !== reading.book.idBook) {
                    reading.book && recentBooks.set(reading.book.idBook, reading.book);
                }
            }
            if(recentBooks.size === 0) {
                reading.book && recentBooks.set(reading.book.idBook, reading.book);
            }
        }

        return recentBooks;
    }
    
    public addReading(data: APIReadingData){
        const reading = new Reading(this.client, data);
        this.readings.set(reading.idReading, reading);
        return reading;
    }

    public removeReading(idReading: number){
        this.readings.delete(idReading);
    }

}