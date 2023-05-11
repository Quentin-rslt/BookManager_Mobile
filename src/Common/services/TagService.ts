import Book from '../Class/Book';
import Client from '../Class/Client';
import Tag from '../Class/Tag';
import BaseService from './BaseService';

export default class TagService extends BaseService {

    public tags:Tag[];

    constructor(client: Client) {
        super(client);
        this.tags = new Array<Tag>;
    }

    public async fetchTags(){
        const res = await fetch("http://192.168.0.34:9000/api/tag/all");
    
        if(res.ok) {
            const tags: Tag[] = await res.json();
            tags.map((tag) => 
                this.fetchBooksByTag(tag)
            )
            return this.setTags([...tags]);
        }
    
        return [];
    }

    public async fetchBooksByTag(tag: Tag){
    
        const res = await fetch("http://192.168.0.34:9000/api/book/tag/"+tag.idTag+"");
    
        if(res.ok) {
            const books: Book[] = await res.json();
            return this.setBooks(tag.idTag, [...books]);
        }
        
        return [];
    }

    public setTags(value:Tag[]){
        this.tags = value;
        return this;
    }

    public setBooks(idTag:number, books:Book[]){
        this.tags[idTag].books= [...books];
        return this;
    }
}

