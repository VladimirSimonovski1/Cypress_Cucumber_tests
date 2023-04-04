export class SearchPage {

    public verifySearchResult(title: string): void {
        cy.get("#post-4527").should("have.length", 1);
        cy.get("[id='post-4527'] .title").should("have.text", title);
    }
}