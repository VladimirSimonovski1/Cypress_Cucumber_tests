export abstract class Base {

    protected baseUrl: string;

    constructor(url : string) {
        this.baseUrl = url;
    }

    protected get(method: string, apiUrl: string) {
        cy.log(
            `Sending a '${method}' request to '${this.baseUrl}${apiUrl}' endpoint...`
          );
          return cy
            .request(method, `${this.baseUrl}${apiUrl}`)
            .then((response) => {
              expect(response.status).to.eq(200);
              cy.log(`RESPONSE BODY IS: ${JSON.stringify(response.body)}`).then(
                () => {
                  return response.body;
                }
              );
            });
        }
    }