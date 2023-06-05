import axios from "axios";
import Client from "../class/Client";
import Reading from "../class/Reading";
import BaseService from "./BaseService";
import { APIReadingData } from "../type/Data";

export default class ReadingService extends BaseService {
    public readings: Map<number, Reading>;

    constructor(client: Client) {
        super(client);
        this.readings = new Map();
    }

    public async fetchReadings(){
        const res = (await axios.get(`${this.getIp()}/api/reading/all`));

        if(res.status === 200) {
            const data: APIReadingData[] = res.data
            this.readings = new Map();
            for(const reading of data) {
                this.addReading(reading);
            }

            return this.readings;
        }
    
        return new Map();
    }
    
    public addReading(data: APIReadingData){
        const reading = new Reading(this.client, data);
        this.readings.set(reading.idReading, reading);
        return reading;
    }

    public removeReading(idReading: number){
        this.readings.delete(idReading);
    }

}