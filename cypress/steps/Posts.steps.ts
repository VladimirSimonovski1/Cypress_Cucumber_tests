import { DataTable, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { Posts } from "../page-objects/Posts";

let responseBody: any = {};

When(
  "I {string} a specific post by {string} slug",
  (method: string, paramValue: string): void => {
    const c = new Posts(`/posts?slug=${paramValue}`);
    c.getPosts(method).then((body) => {
      for (let posts of body) {
        return (responseBody = posts);
      }
    });
  }
);

Then("I verify that the content is not empty", (): void => {
  expect(JSON.stringify(responseBody.content)).to.not.be.empty;
});

Then(
  "I verify that the following tag ids are present for the post id: {int}",
  (postId: number): void => {
    if (responseBody.id === postId) {
      expect(
        responseBody.tags,
        "The post id does not include those tags! Maybe wrong post?"
      ).to.deep.eq([153, 160, 92, 248, 247, 238]);
    }
  }
);

Then("I verify the post content", (table: DataTable): void => {
  table.hashes().forEach((rowEntry) => {
    if(rowEntry.property === "guid" || rowEntry.property === "title") {
       expect(responseBody[rowEntry.property]["rendered"]).to.eq(rowEntry.value);
    } else {
      expect(responseBody[rowEntry.property].toString()).to.eq(rowEntry.value);
    }
  });
});
