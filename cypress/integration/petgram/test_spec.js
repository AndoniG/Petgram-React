describe('Petgram', function () {
    it("App Works", function () {
        cy.visit('/')
    });

    it("Go to dog category and see photos", function () {
        cy.visit('/pet/2');
        cy.get('article');
    });

    it("Go to home by click on navbar", function () {
        cy.visit('/pet/1');
        cy.get('nav a').first().click();
        cy.url().should('include', '/');
    });

    it("Not registered users get login form in /favs route", function () {
        cy.visit('/favs');
        cy.get('form').should('have.length', 2);
    });
})