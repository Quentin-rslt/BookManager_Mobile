export default class Reading {
    public idReading:number|undefined;

    public startReadingDate:Date;

    public endReadingDate:Date;

    constructor(startReadingDate:Date, endReadingDate:Date, idReading?:number) {
        this.idReading = idReading;
        this.startReadingDate = startReadingDate;
        this.endReadingDate = endReadingDate;
    };
}