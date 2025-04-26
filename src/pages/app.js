import {Crash, Product, Visual} from "./index";

export class App {
    constructor(page) {
        this.page = page;
        this.mainPage = new Crash(page);
        this.visual = new Visual(page);
        this.product = new Product(page);
    }
}