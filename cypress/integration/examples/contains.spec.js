/// <reference types="cypress" />

context("cy.contains", () => {
  beforeEach(() => {
    cy.visit("https://csb-q4913.netlify.app/");
  });

  it("cy.contains() - should work without chaining", () => {
    cy.get("h1").should("have.text", "Hello CodeSandbox");
    cy.contains("Current key is:").as("counter").should("contain", "0");

    // works fine
    cy.get("@counter").should("match", "div");

    // this causes the <div> to be recreated and also removes H1
    cy.contains("button", "Increment key").click();
    cy.get("h1").should("not.exist");

    // fails trying to get "h1"
    cy.get("@counter").should("contain", "1");
  });
});
