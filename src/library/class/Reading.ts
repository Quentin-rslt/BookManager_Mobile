export default class Reading {
    public idReading:number;

    public startReadingDate:Date;

    public endReadingDate:Date;

    constructor(startReadingDate:Date, endReadingDate:Date, idReading?:number) {
        this.idReading = idReading ? idReading : 0;
        this.startReadingDate = new Date(startReadingDate);
        this.endReadingDate = new Date(endReadingDate);
    };
}