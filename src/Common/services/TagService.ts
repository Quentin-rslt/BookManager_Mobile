import axios from 'axios';
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
        const res = await fetch(`${this.getIp()}/api/tag/all`);
    
        if(res.ok) {
            const tags: Tag[] = await res.json();
            await this.setTags([...tags]);
            return this.tags;
        }
    
        return [];
    }

    public async fetchBooksForTag(tag: Tag){
        const res = await axios.get(`${this.getIp()}/api/book/tag/`+tag.idTag+"");
    
        if(res.status === 200) {
            const books: Book[] = await res.data;
       
            return books;
        }
        
        return [];
    }

    public async createTag(tag: Tag){
        const data = tag.toJSON();
        await axios.post(`${this.getIp()}/api/addTag`, data, {
            headers: {
              'Content-Type': 'application/json',
            },
        });
        this.addTag(tag);

        return this.tags;
    }

    public addTag(t:Tag){
        const tag = new Tag(this.client, t.textTag, t.colorTag, t.idTag, []);
        this.tags.push(tag);
    }

    public async setTags(tags:Tag[]){
        this.tags = new Array<Tag>();

        for(const t of tags) {
            const books = await this.fetchBooksForTag(t);
            const tag = new Tag(this.client, t.textTag, t.colorTag, t.idTag, books);
            this.tags.push(tag);
        }

        return this.tags;
    }
}

