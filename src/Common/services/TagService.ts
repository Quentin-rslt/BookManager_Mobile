import axios from 'axios';
import Client from '../Class/Client';
import Tag from '../Class/Tag';
import BaseService from './BaseService';

export default class TagService extends BaseService {

    public tags:Map<number, Tag>;

    constructor(client: Client) {
        super(client);
        this.tags = new Map();
    }

    public async fetchTags(){
        const res = await axios.get(`${this.getIp()}/api/tag/all`);
    
        if(res.status === 200) {
            this.tags = new Map();
            for(const tag of res.data) {
                this.addTag(tag);
            }

            return this.tags;
        }
    
        return [];
    }

    public async createTag(tag: Tag){
        const data = tag.toJSON();
        const res = await axios.post(`${this.getIp()}/api/addTag`, data);
        const newTag:Tag = res.data;

        this.addTag(newTag);

        return this.tags;
    }

    public async deleteTag(tag: Tag){
        await axios.delete(`${this.getIp()}/api/deleteTag/${tag.idTag}`);

        this.removeTag(tag.idTag);
    }

    public addTag(t:Tag){
        const tag = new Tag(this.client, t.textTag, t.colorTag, t.idTag);
        this.tags.set(t.idTag, tag);
    }

    public removeTag(idTag: number){
        this.tags.delete(idTag);
    }
}

