class LoginPage {
    
    get loginHeader() {
        return cy.get("h1");
    }

    get emailLabel() {
        return cy.get("label").contains("Email Address");
    }

    get emailInputField() {
        return cy.get('input[type="email"]');
    }

    get passwordLabel() {
        return cy.get("label").contains("Password");
    }
    
    get passwordInputField() {
        return cy.get('input[type="password"]');
    }

    get forgotPasswordLink() {
        return cy.get('a[data-cy="login-forgot-password-link"]');
    }

    get loginButton() {
        return cy.get('button[type="submit"]');
    }

    get backToHomeButton() {
        return cy.get('a[data-cy="login-homepage-link"]');
    }

    get loginWithLabel() {
        return cy.get("p").contains("Or login with...");
    }

    get googleButton() {
        return cy.get('button[data-cy="login-google-button"]');
    }
    
    get facebookButton() {
        return cy.get('button[data-cy="login-facebook-button"]');
    }

    get twitterButton() {
        return cy.get('button[data-cy="login-twitter-button"]');
    }

    get regzenButton() {
        return cy.get('button[data-cy="login-regzen-button"]');
    }

    get signUpLabel() {
        return cy.get("div").contains("Don't have an account?");
    }

    get signupLink() {
        return cy.get('a[data-cy="login-sign-up-link"]');
    }

    assertLoginPageElements() {
        this.loginHeader.should("be.visible").and("have.text", "Log in with your existing account");
        this.emailLabel.should("be.visible").and("have.text", "Email Address");
        this.emailInputField.should("be.visible");
        this.passwordLabel.should("be.visible").and("have.text", "Password");
        this.forgotPasswordLink.should("be.visible").contains("Forgot Password?");
        this.loginButton.should("be.visible");
        this.backToHomeButton.should("be.visible");
        this.loginWithLabel.should("be.visible").contains("Or login with...");
        this.googleButton.should("be.visible");
        this.facebookButton.should("be.visible");
        this.twitterButton.should("be.visible");
        this.regzenButton.should("be.visible");
        this.signUpLabel.should("be.visible");
        this.signupLink.should("be.visible").contains("Sign Up");
    }

    loginUser(email, password) {
        this.emailInputField.type(email);
        this.passwordInputField.type(password);
        this.loginButton.click();
    }
}

export const loginPage = new LoginPage();