import { APIReadingData } from "../type/Data";
import Base from "./Base";
import Client from "./Client";

export default class Reading extends Base {

    public data?: APIReadingData;

    public idReading:number;

    public startReadingDate:Date;

    public endReadingDate:Date;

    constructor(client:Client, data?: APIReadingData) {
        super(client);
        this.data = data;
        this.idReading = data?.idReading ?? 0  ;
        this.startReadingDate = new Date(data?.startReadingDate ?? new Date());
        this.endReadingDate = new Date(data?.endReadingDate ?? new Date());
    };

    public setIdReading(idReading: number){
        this.idReading = idReading;
        return this;
    }

    public setStartReadingDate(startReadingDate: Date){
        this.startReadingDate = startReadingDate;
        return this;
    }

    public setEndReadingDate(endReadingDate: Date){
        this.endReadingDate = endReadingDate;
        return this;
    }

    public toJSON() {
        return {
            idReading: this.idReading,
            startReadingDate: this.startReadingDate,
            endReadingDate: this.endReadingDate,
        }
    }

    get book() {
        for(const b of this.client.bookService.books.values()){
            for(const r of b.readings.values()){
                if(r.idReading === this.idReading) {
                    return b;
                }
            }
        }
    }
}