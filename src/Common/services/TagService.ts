import Book from '../Class/Book';
import Client from '../Class/Client';
import Tag from '../Class/Tag';
import BaseService from './BaseService';

export default class TagService extends BaseService {

    public tags:Tag[];

    constructor(client: Client) {
        super(client);
        this.tags = new Array<Tag>();
    }

    public async fetchTags(){
        const res = await fetch("http://192.168.1.18:9000/api/tag/all");
    
        if(res.ok) {
            const tags: Tag[] = await res.json();
            await this.setTags(tags);
            return this.tags;
        }
    
        return [];
    }

    public async fetchBooksByTag(tag: Tag){
        const res = await fetch("http://192.168.1.18:9000/api/book/tag/"+tag.idTag+"");
    
        if(res.ok) {
            const books: Book[] = await res.json();
            return books;
        }
        
        return [];
    }

    public async setTags(tags:Tag[]){
        this.tags = new Array<Tag>();

        for(const t of tags) {
            const books = await this.fetchBooksByTag(t);
            const tag = new Tag(t.textTag, t.colorTag, t.idTag, books);
            this.tags.push(tag);
        }

        return this.tags;
    }

    public getTag(idTag:number){
        return this.tags[idTag];
    }
}

