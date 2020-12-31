describe('Test Cases for Foodnerd', () => {
  //First Test case for Visting foodnerd website
  it('TC 1, Visits the  FoodNerd Website', () => {
    cy.visit('https://www.foodnerd.pk/')
    cy.url().should('eq', 'https://www.foodnerd.pk/')  //getting into that particular page
  })
 
  //Second test case for Clicking Locations

  it('TC 2,Clicking Locations',() => {
  cy.contains("Locations").click();//To click on locations and
  cy.url().should('eq', 'https://www.foodnerd.pk/locations')  //getting into that particular page
  cy.wait();

})
it('TC 3,Searching for new Locations',() => {
  cy.get('#search-field').type('islamabad resturant');
  cy.get('//a[contains(text(),'Search')]').click();
  //cy.url().should('eq', 'https://www.foodnerd.pk/locations')

})
})
