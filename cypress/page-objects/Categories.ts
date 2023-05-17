import { Base } from "./Base";

export class Categories extends Base {

    private apiUrl: string;

    constructor(url: string) {
        super("https://qamind.com/wp-json/wp/v2");
        this.apiUrl = url;
    }

    public prepareRequest(): void {
        cy.log("Preparing request...");
    }

    public getCategories(method: string): any {
        return this.get(method, this.apiUrl);
    }

    public getTags(method: string): any {
        return this.get(method, this.apiUrl);
    }
}