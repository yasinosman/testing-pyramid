import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "./Todo";
import TodoModel from "./TodoModel";

describe("Todo", () => {
	it("renders the todo with the correct text", () => {
		const todo = new TodoModel({
			id: 1,
			text: "Use Redux",
			completed: false,
		});

		render(<Todo todo={todo} />);

		const todoText = screen.getByText(todo.text);
		expect(todoText).toBeInTheDocument();
		expect(todoText).toHaveTextContent(todo.text);
	});

	it("runs the onClick callback when the todo is clicked", () => {
		const todo = new TodoModel({
			id: 1,
			text: "Use Redux",
			completed: false,
		});

		const onClick = jest.fn();

		render(<Todo todo={todo} onClick={onClick} />);

		const todoText = screen.getByText(todo.text);
		fireEvent.click(todoText);

		expect(onClick).toHaveBeenCalledTimes(1);
		expect(onClick).toHaveBeenCalledWith(todo);
	});
});
