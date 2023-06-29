import Client from "../class/Client";

export default class BaseService {
    
    public client: Client;

    constructor(client: Client) {
        this.client = client
    }

    public getIp(){
        return "http://192.168.0.18:9000";
    }
}