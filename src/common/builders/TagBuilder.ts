import Base from "../class/Base";
import Client from "../class/Client";

export interface TagDataBuilder {
    idTag: number;
    textTag: string;
    colorTag: number;
}

export default class TagBuilder extends Base {
    public idTag: number;
    
    public textTag: string;
    
    public colorTag: number;


    constructor(client:Client, data?: TagDataBuilder) {
        super(client);
        this.idTag = data?.idTag ?? 0;
        this.textTag = data?.textTag ?? "";
        this.colorTag = data?.colorTag ?? 0;
    }

    public toJSON() {
        return {
            idTag: this.idTag,
            textTag: this.textTag,
            colorTag: this.colorTag,
        }
    }

    public setTextTag(value: string){
        this.textTag = value;
        return this;
    }

    public setColorTag(value: number){
        this.colorTag = value;
        return this;
    }
}