/* eslint-disable jest/valid-expect */

describe("My First Test", () => {
	it("Adds a todo to the list", () => {
		const todoText = "Use Redux";
		cy.visit("http://localhost:3000/");

		cy.get('[data-testid="todo-input__input"]').type(todoText);

		cy.get('[data-testid="todo-input__button"]').click();

		cy.contains(todoText);
	});

	it("Toggles a todo on the list", () => {
		const todoText = "Use Redux";
		cy.visit("http://localhost:3000/");

		cy.get('[data-testid="todo-input__input"]').type(todoText);

		cy.get('[data-testid="todo-input__button"]').click();

		cy.contains(todoText).click().should("have.css", "text-decoration", "line-through solid rgb(0, 0, 0)");
	});

	it("Untoggles a todo on the list", () => {
		const todoText = "Use Redux";
		cy.visit("http://localhost:3000/");

		cy.get('[data-testid="todo-input__input"]').type(todoText);

		cy.get('[data-testid="todo-input__button"]').click();

		cy.contains(todoText).click().should("have.css", "text-decoration", "line-through solid rgb(0, 0, 0)");

		cy.contains(todoText).click().should("have.css", "text-decoration", "none solid rgb(0, 0, 0)");
	});
});
