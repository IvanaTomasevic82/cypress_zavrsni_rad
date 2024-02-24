/// <reference types="Cypress" />

import { faker } from "@faker-js/faker";

const {loginPage} = require("../page-object/loginPage");

const testData = require("../fixtures/testData.json");

const validEmail = testData.credentials.validEmail;
const validPassword = testData.credentials.validPassword;

const invalidEmail = faker.internet.email();
const invalidPassword = faker.internet.password()


describe("Login page", () => {

  beforeEach("Visit Login page", () => {
    cy.visit("/login");
  })

  it("Visit Login page and assert elements", () => {
    loginPage.assertLoginPageElements()
  })

  it("Login user with valid credentials", () => {
    cy.intercept(
      "POST",
      "https://cypress-api.vivifyscrum-stage.com/api/v2/login"
    ).as("successfullLogin");

    loginPage.loginUser(validEmail, validPassword);

    cy.wait("@successfullLogin").then(response => {
      expect(response.response.statusCode).to.eq(200);
    })
  })

  it("Login user with invalid credentials", () => {
    cy.intercept(
      "POST",
      "https://cypress-api.vivifyscrum-stage.com/api/v2/login"
    ).as("successfullLogin");

    loginPage.loginUser(invalidEmail, invalidPassword);

    cy.wait("@successfullLogin").then(response => {
      expect(response.response.statusCode).to.eq(401);
    })
  })
}) 