
export class HomePage {

    constructor(private baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    public navigateToHomePage(): void {
        cy.visit(this.baseUrl);
    }

    public searchArticleByKeyword(keyword: string): void {
        cy.get(".axil-search.form-group input.form-control", {timeout: 10000}).click().clear().then(($field) => {
            cy.wrap($field).type(`${keyword}{enter}`)});
    }

    public openArticleByName(title: string): void {
        cy.contains(title).then((article) => {
            cy.wrap(article).click().should("have.text", title);
        });
    }
}