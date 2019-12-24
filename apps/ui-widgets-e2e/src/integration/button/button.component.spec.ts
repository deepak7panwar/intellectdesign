describe('ui-widgets', () => {
  beforeEach(() => cy.visit('/iframe.html?id=buttoncomponent--primary'));

  it('should render the component', () => {
    cy.get('myworkspace-button').should('exist');
  });
});
