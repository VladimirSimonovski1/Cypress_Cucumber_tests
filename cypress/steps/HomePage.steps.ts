import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from '../page-objects/HomePage';

const hp = new HomePage("https://www.qamind.com");

Given("I visit qamind.com", (): void => {
  hp.navigateToHomePage();
});

When("I search for {string}", (keyword: string): void => {
  hp.searchArticleByKeyword(keyword);
});

Then("I open article: {string}", (title: string): void => {
  hp.openArticleByName(title);
});
