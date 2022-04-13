import { fireEvent, render, screen } from "@testing-library/react";
import TodoInput from "./TodoInput";

describe("TodoInput", () => {
	it("runs the onSubmit callback when the button is clicked", () => {
		const todoText = "Use Redux";
		const onSubmit = jest.fn();
		render(<TodoInput onSubmit={onSubmit} />);

		const input = screen.getByTestId("todo-input__input");
		fireEvent.change(input, { target: { value: todoText } });

		const button = screen.getByTestId("todo-input__button");
		fireEvent.click(button);

		expect(onSubmit).toHaveBeenCalledTimes(1);
		expect(onSubmit).toHaveBeenCalledWith(todoText);
	});
});
