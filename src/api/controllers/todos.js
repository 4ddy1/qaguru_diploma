import {Api} from "../service";
import {Builder} from "../helpers/index";

export class Todos {
    constructor(){
        this.api = new Api();
        this.builder = new Builder();

    }

    async getTodos(guid){
        return await this.api.get(guid, `${process.env.BASEURL}todos`);
    }

    async getTodosXml(guid){
        return await this.api.getXml(guid, `${process.env.BASEURL}todos`);
    }

    async getTodosXmlPref(guid){
        return await this.api.getXmlPref(guid, `${process.env.BASEURL}todos`);
    }

    async getTodosJson(guid){
        return await this.api.getJson(guid, `${process.env.BASEURL}todos`);
    }

    async getTodosAny(guid){
        return await this.api.getAny(guid, `${process.env.BASEURL}todos`);
    }

    async getTodosGzip(guid){
        return await this.api.getGzip(guid, `${process.env.BASEURL}todos`);
    }

    async getTodosDone(guid){
        return await this.api.get(guid, `${process.env.BASEURL}todos?doneStatus=true`);
    }

    async getTodo(guid){
        return await this.api.get(guid, `${process.env.BASEURL}todo`);
    }

    async getTodosId(guid, id){
        return await this.api.get(guid, `${process.env.BASEURL}todos/${id.todos[0].id}`);
    }

    async headTodos(guid){
        return await this.api.head(guid, `${process.env.BASEURL}todos`);
    }

    async postTodos(guid, payload){
        return await this.api.post(guid, `${process.env.BASEURL}todos`, payload || await this.builder.todoBuid());
    }

    async postTodosId(guid, id, payload){
        return await this.api.post(guid, `${process.env.BASEURL}todos/${id.todos[0].id}`, payload || await this.builder.todoBuid());
    }

    async putTodosId(guid, id, payload){
        return await this.api.put(guid, `${process.env.BASEURL}todos/${id.todos[0].id}`, payload || await this.builder.todoBuid());
    }

    async deleteTodosId(guid, id){
        return await this.api.delete(guid, `${process.env.BASEURL}todos/${id.todos[0].id}`);
    }

    async optionsTodos(guid){
        return await this.api.options(guid, `${process.env.BASEURL}todos`);
    }
}