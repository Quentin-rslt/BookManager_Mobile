import Client from "./Client";

export default class Base {
    
    public client: Client;

    constructor(client: Client) {
        this.client = client;
    }
}