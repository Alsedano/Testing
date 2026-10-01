
describe('Login specs', () => {
  it('visit the login page', () => {
    cy.visit('/');
  });

  it('should user input has the focus when it clicks on it', () => {
    // Arrange
    // Act
    cy.visit('/');
    cy.get('input[name="user"]').click();
    // Assert
    cy.get('input[name="user"]').should('have.focus');
  });

  it('should password input has the focus when it clicks on it', () => {
    // Arrange
    // Act
    cy.visit('/');
    cy.get('input[name="password"]').click();
    // Assert
    cy.get('input[name="password"]').should('have.focus');
  });

  it('should user input has a value because it is mandatory', () => {
    // Arrange
    const user = 'admin';

    // Act
    cy.visit('/');
    cy.findByLabelText('Usuario *').as('userInput');

    cy.get('@userInput').type(user);
    // Assert
    cy.get('@userInput').should('have.value', user);
  });

  it('should user input has a validation when it is empty because its mandatory', () => {
    // Arrange

    // Act
    cy.visit('/');
    cy.findByLabelText('Usuario *').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');

    // Assert
    cy.get('@userInput').click();
    cy.get('@passwordInput').click();
    cy.get('@userInput').parent().should('have.class', 'Mui-error');
  });

  it('should password input has a value because it is mandatory', () => {
    // Arrange
    const password = '1234';

    // Act
    cy.visit('/');
    cy.findByLabelText('Contraseña *').as('passwordInput');

    cy.get('@passwordInput').type(password);
    // Assert
    cy.get('@passwordInput').should('have.value', password);
  });

  it('should password input has a validation when it is empty because its mandatory', () => {
    // Arrange
    const user = 'admin';

    // Act
    cy.visit('/');
    cy.findByLabelText('Usuario *').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');

    cy.findByRole('button', { name: 'Login' }).click();
    // Assert
    cy.get('@userInput').type(user);
    cy.get('@passwordInput').parent().should('have.class', 'Mui-error');
  });

  it('should show a validation message when wrong credentials are entered', () => {
    // Arrange
    const user = 'admin';
    const password = '1234';
    const loginError = 'Usuario y/o password no válidos';
    // Act
    cy.visit('/');
    cy.findByLabelText('Usuario *').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button', { name: 'Login' }).click();

    // Assert
    cy.get('@userInput').should('have.value', user);
    cy.get('@passwordInput').should('have.value', password);

    cy.findByRole('alert').should('contain.text', loginError);
  });

  it('should navigate to Project tracker url when type valid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = 'test';

    // Act
    cy.visit('/');
    cy.findByLabelText('Usuario *').as('userInput');
    cy.findByLabelText('Contraseña *').as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button', { name: 'Login' }).click();

    // Assert
    cy.url().should('equal', 'http://localhost:5173/#/submodule-list');
    cy.location('hash').should('equal', '#/submodule-list');
  });

});

