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
        cy.log(`Sending a '${method}' request to '${this.baseUrl}${this.apiUrl}' endpoint...`);
         return cy.request(method, `${this.baseUrl}${this.apiUrl}`).then((response) => {
            expect(response.status).to.eq(200);
            return response.body;
        });
    }
}