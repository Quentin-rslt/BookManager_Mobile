export default class Reading {
    public id:number|undefined;

    public startReading:Date;

    public endReading:Date;

    constructor(startReading:Date, endReading:Date, id?:number) {
        this.id = id;
        this.startReading = startReading;
        this.endReading = endReading;
    };
}