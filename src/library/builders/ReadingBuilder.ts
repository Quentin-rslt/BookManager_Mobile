import Base from "../class/Base";
import Client from "../class/Client";
import { APIReadingData } from "../type/Data";

export interface ReadingDataBuilder {
    idReading: number;
    startReadingDate: Date;
    endReadingDate: Date;
}

export default class ReadingBuilder extends Base {

    public idReading: number;

    public startReadingDate: Date;

    public endReadingDate: Date;

    constructor(client: Client, data?: APIReadingData) {
        super(client);
        this.idReading = data?.idReading ?? 0;
        this.startReadingDate = new Date(data?.startReadingDate ?? new Date());
        this.endReadingDate = new Date(data?.endReadingDate ?? new Date());
    };

    public toJSON() {
        return {
            idReading: this.idReading,
            startReadingDate: this.startReadingDate,
            endReadingDate: this.endReadingDate,
        }
    }

    public setStartReadingDate(startReadingDate: Date){
        this.startReadingDate = startReadingDate;
        return this;
    }

    public setEndReadingDate(endReadingDate: Date){
        this.endReadingDate = endReadingDate;
        return this;
    }
}