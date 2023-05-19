import Client from "../Class/Client";

export default class BaseService {
    
    public client: Client;

    constructor(client: Client) {
        this.client = client
    }

    public getIp(){
        return "http://192.168.136.175:9000";
    }
}