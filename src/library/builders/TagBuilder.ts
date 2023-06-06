import Base from "../class/Base";
import Client from "../class/Client";

export interface TagDataBuilder {
    idTag: number;
    textTag: string;
    colorTag: string;
}

export default class TagBuilder extends Base {
    
    public idTag: number;
    
    public textTag: string;
    
    public colorTag: string;


    constructor(client:Client, data?: TagDataBuilder) {
        super(client);
        this.idTag = data?.idTag ?? 0;
        this.textTag = data?.textTag ?? "";
        this.colorTag = data?.colorTag ?? "#c53e3ee5";
    }

    public toJSON() {
        return {
            idTag: this.idTag,
            textTag: this.textTag,
            colorTag: this.colorTag,
        }
    }

    public setTextTag(textTag: string){
        this.textTag = textTag;
        return this;
    }

    public setColorTag(colorTag: string){
        this.colorTag = colorTag;
        return this;
    }
}