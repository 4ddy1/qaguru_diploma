import {Api} from "../service";
import 'dotenv/config';
import {faker} from "@faker-js/faker";

export class Builder {
    constructor() {
        this.todoPayload;
    }

    async createTodos(guid, payload){
        const api = new Api();

        return await api.post(guid, `${process.env.BASEURL}todos`, payload || await this.todoBuid());
    }

    async todoBuid(){
        this.todoPayload = {
            "title": `adil test${faker.number.int({max:9999999999999999})}`,
            "doneStatus": true,
            "description": ""
        }
        return this.todoPayload
    }
}