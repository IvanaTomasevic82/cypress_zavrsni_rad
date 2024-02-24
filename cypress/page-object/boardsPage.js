class BoardsPage {
    get addNewBoardButton() {
        return cy.get('li[title="Add new Board"]');
    }

    get boardTitleInput() {
        return cy.get('input[name="name"]');
    }

    get boardTypeCheck() {
        return cy.get('span[name="type_scrum"]');
    }

    get nextButton() {
        return cy.get('button[name="next_btn"]')
    }

    addNewBoard(title) {
        this.addNewBoardButton.click();
        this.boardTitleInput.type(title);
        this.nextButton.click();
        this.boardTypeCheck.click();
        this.nextButton.click();
        this.nextButton.click();
        this.nextButton.click();
    }
}

export const boardsPage = new BoardsPage()