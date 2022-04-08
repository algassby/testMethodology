/// <reference types="cypress" />

describe("Calculator", () => {
    it("Test addition", () => {
      cy.visit("http://localhost:3000");
      cy.contains("1").click();
      cy.contains("+").click();
      cy.contains("2").click();
      cy.contains("=").click();
      cy.get(".result").contains("3");
    });
  });

  
describe("Calculator", () => {
    it("Test substraction", () => {
      cy.visit("http://localhost:3000");
      cy.contains("7").click();
      cy.contains("-").click();
      cy.contains("6").click();
      cy.contains("=").click();
      cy.get(".result").contains("1");
    });
  });

  
describe("Calculator", () => {
    it("Test division", () => {
      cy.visit("http://localhost:3000");
      cy.contains("4").click();
      cy.contains("/").click();
      cy.contains("2").click();
      cy.contains("=").click();
      cy.get(".result").contains("2");
    });
  });

  
describe("Calculator", () => {
    it("Test modulo", () => {
      cy.visit("http://localhost:3000");
      cy.contains("4").click();
      cy.contains("%").click();
      cy.contains("2").click();
      cy.contains("=").click();
      cy.get(".result").contains("0");
    });
  });


  describe("Calculator", () => {
    it("Test Square", () => {
      cy.visit("http://localhost:3000");
      cy.contains("9").click();
      cy.contains("√x").click();
      cy.contains("=").click();
      cy.get(".result").contains("3");
    });
  });
  