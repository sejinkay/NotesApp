describe("infrastructure test", function() {
  it("Shows welcome message", function() {
    cy.visit("/");
    cy.contains("Notes")
  });
});
