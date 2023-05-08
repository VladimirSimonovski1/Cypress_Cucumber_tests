import {
  Given,
  When,
  Then,
  DataTable,
} from "@badeball/cypress-cucumber-preprocessor";
import { Categories } from "../page-objects/Categories";

const c = new Categories("/categories");
let responseBody: any = {};

Given("I have a {string} request prepared", (): void => {
  c.prepareRequest();
});

When("I send the {string} request", (method: string): void => {
  c.getCategories(method).then((body) => {
    responseBody = body;
  });
});

Then("I see all the {string}", (): void => {
  expect(responseBody.length).to.equal(6);
});

Then("I verify all the category names", (table: DataTable): void => {
  expect(responseBody.body).to.not.be.null;
  const expectedArray = new Array<string>();
  for (let i in responseBody) {
    expectedArray.push(table.rows()[i].toString());
    expect(responseBody[i].name).to.deep.eq(expectedArray[i]);
  }
});
