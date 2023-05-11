import Tag from '../Class/Tag';

export default class TagService {

    public tags:Tag[];

    constructor() {
        this.tags = new Array<Tag>;
    }

    public async fetchTags(){
        const res = await fetch("http://192.168.0.34:9000/api/tag/all");
    
        if(res.ok) {
            const data: Tag[] = await res.json();
            return this.setTags([...data]);
        }
    
        return [];
    }

    public setTags(value:Tag[]){
        this.tags = value;
        return this;
    }
}

