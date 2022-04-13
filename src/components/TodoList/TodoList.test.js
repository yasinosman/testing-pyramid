import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

describe("TodoList", () => {
	it("displays the newly added todo on the list", () => {
		// Arrange
		render(<TodoList />);

		const todoText = "Use Redux";

		// Act
		const input = screen.getByTestId("todo-input__input");
		fireEvent.change(input, { target: { value: todoText } });

		const button = screen.getByTestId("todo-input__button");
		fireEvent.click(button);

		// Assert
		const todo = screen.getByText(todoText);
		expect(todo).toBeInTheDocument();
		expect(todo).toHaveTextContent(todoText);
	});
});
