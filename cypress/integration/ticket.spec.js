describe('ticket', () => {
  beforeEach(() => {
    cy.visit('localhost:3000');
  });

  it('should be possible to fill in ticket fields and get the template at the end', () => {
    cy.findAllByPlaceholderText("What's the name of the ticket?").type(
      'Partner Platform Integration {enter}'
    );
    cy.findAllByPlaceholderText('What problem is it trying to solve?').type(
      'Securing the site with BBC Login. {enter}'
    );
    cy.findAllByPlaceholderText('How does it solve the problem?').type(
      'Parnter platform integration enables the use of BBC Login. {enter}'
    );
    cy.findAllByPlaceholderText('Who should work on this ticket?').type(
      'Lee McGowan {enter}'
    );
  });
});
