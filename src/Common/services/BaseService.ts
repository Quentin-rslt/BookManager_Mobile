import Client from "../Class/Client";

export default class BaseService {
    
    public client: Client;

    constructor(client: Client) {
        this.client = client
    }

    public getIp(){
        return "http://10.121.128.89:9000";
    }
}