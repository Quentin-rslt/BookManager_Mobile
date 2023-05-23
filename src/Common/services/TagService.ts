import axios from 'axios';
import Client from '../Class/Client';
import Tag from '../Class/Tag';
import BaseService from './BaseService';
import TagBuilder from '../Class/TagBuilder';
import { APITagData } from '../Type/Data';

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
            const data: APITagData[] = res.data;
            for(const tag of data) {
                this.addTag(tag);
            }

            return this.tags;
        }
    
        return [];
    }

    public async createTag(tag: TagBuilder){
        const data = tag.toJSON();
        const res = await axios.post(`${this.getIp()}/api/addTag`, data);

        const newTag:APITagData = res.data;

        return this.addTag(newTag);
    }

    public async editTag(tag: TagBuilder){
        const data = tag.toJSON();
        const res = await axios.put(`${this.getIp()}/api/updateTag/${tag.idTag}`, data);

        const newBook:APITagData = res.data;

        return this.updateTag(newBook);
    }

    public async deleteTag(tag: Tag){
        await axios.delete(`${this.getIp()}/api/deleteTag/${tag.idTag}`);

        this.removeTag(tag);
    }

    public addTag(data:APITagData){
        const tag = new Tag(this.client, data);
        this.tags.set(data.idTag, tag);
        return tag;
    }

    public updateTag(data:APITagData){
        const tag = this.tags.get(data.idTag);
        if(tag){
            tag.update(data);
            return tag;
        }
    }

    public removeTag(tag: Tag){
        this.tags.delete(tag.idTag);
    }
}

