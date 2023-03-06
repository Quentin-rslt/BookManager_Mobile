
export default class Tag {
    public idTag:number|undefined;
    
    public textTag:string;
    
    public colorTag:number;

    constructor(textTag:string, colorTag:number, idTag?:number) {
        this.idTag=idTag;
        this.textTag=textTag;
        this.colorTag=colorTag;
    }
}