import { DataTable, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { Tags } from "../page-objects/Tags";

let responseBody: any = {};

When("I {string} all the tags", (method: string): void => {
  const c = new Tags("/tags?per_page=100");
  c.getTags(method).then((body) => {
    responseBody = body;
  });
});

When("I {string} a specific tag by slug", (method: string): void => {
  const c = new Tags("/tags?slug='accessibility-testing'");
  c.getTags(method).then((body) => {
    responseBody = body;
  });
});

Then(
  "I verify that currently there are {int} tags",
  (expectedNumOfTags: number): void => {
    expect(responseBody.length).to.equal(expectedNumOfTags);
  }
);

Then(
  "I verify that the following properties are correct",
  (table: DataTable): void => {
    cy.log(`VLAD: ${JSON.stringify(responseBody)}`);
    const map = new Map<string, string>();
    table.hashes().forEach((rowEntry) => map.set(rowEntry.key, rowEntry.value));
    for(const [key, value] of map) {
      expect(responseBody[key.indexOf(key)][key]).to.eq(value);
    }
  }
);
