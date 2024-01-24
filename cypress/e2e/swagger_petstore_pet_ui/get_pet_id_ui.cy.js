beforeEach(() => {
  cy.visit('#/')
  cy.injectAxe()
})

describe('GET query: Find pet by id', () => {
  it('finds a pet by known id', () => {
    cy.get('#operations-pet-getPetById').click();
    cy.get('.try-out > .btn').click();

    //Axe check button
    cy.checkA11y('.try-out > .btn')

    cy.get('.parameters-col_description > input').type('1');
    cy.get('.execute-wrapper > .btn').click();
    cy.screenshot();

    cy.get('[data-code="200"] > .response-col_description > .response-col_description__inner > .markdown > p').invoke('text').then((markdownText) => {
      const expectedMarkdownText = 'successful operation';
      expect(markdownText.trim()).to.equal(expectedMarkdownText.trim());
    });
  });

  it('GET query:  Doesn t finds a pet by id', () => {
    cy.get('#operations-pet-getPetById').click();
    cy.get('.try-out > .btn').click();
    cy.get('.parameters-col_description > input').type('1111111');
    cy.get('.execute-wrapper > .btn').click();
    cy.screenshot();

    cy.get('.response-col_description > .markdown > p').invoke('text').then((markdownText) => {
      const expectedMarkdownText = 'Error: Not Found';
      expect(markdownText.trim()).to.equal(expectedMarkdownText.trim());
    });
  });
});
