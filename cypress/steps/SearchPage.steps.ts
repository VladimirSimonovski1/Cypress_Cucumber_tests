import { Then } from "@badeball/cypress-cucumber-preprocessor";
import { SearchPage } from "../page-objects/SearchPage";

const sp = new SearchPage();

Then("I see the {string} article", (expectedTitle: string): void => {
  sp.verifySearchResult(expectedTitle);
});
