/// <reference types="Cypress" />

const {loginPage} = require("../page-object/loginPage");
const {boardsPage} = require("../page-object/boardsPage");

const testData = require("../fixtures/testData.json");

const validEmail = testData.credentials.validEmail;
const validPassword = testData.credentials.validPassword;

let boardId;
let token;

describe("Create new board", () => {
    before("Login user", () => {
        cy.intercept(
            "POST",
            "https://cypress-api.vivifyscrum-stage.com/api/v2/login"
          ).as("successfullLogin");

        cy.visit("/");
        
        loginPage.loginUser(validEmail, validPassword);
    })

    it("Create new board, delete it and check if deleted", () => {
        cy.wait("@successfullLogin").then(response => {
            expect(response.response.statusCode).to.eq(200);
            token = response.response.body.token;
        })

        cy.intercept(
            "POST",
            "https://cypress-api.vivifyscrum-stage.com/api/v2/boards"
        ).as("successfullCreateBoard");

        boardsPage.addNewBoard("Test board");

        cy.wait("@successfullCreateBoard").then(response => {
            expect(response.response.statusCode).to.eq(201);
            boardId = response.response.body.id;
        }).then(() => {
            cy.request({
                method: "DELETE",
                url: `https://cypress-api.vivifyscrum-stage.com/api/v2/boards/${boardId}`,
                headers: { authorization: `Bearer ${token}`}
            }).then(response => {
            expect(response.status).to.eq(200);
        cy.visit(`/boards/${boardId}`);
        })
        })

    })
})