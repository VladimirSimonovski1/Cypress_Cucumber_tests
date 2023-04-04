import { SearchPage } from "./SearchPage";

export class HomePage {

    constructor(private baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public navigateToHomePage(): void {
        cy.visit(this.baseUrl);
    }

    public searchArticleByKeyword(keyword: string): void {
        cy.get(".axil-search.form-group input.form-control").click().clear().then(($field) => {
            cy.wrap($field).type(`${keyword}{enter}`)});
    }
}