import React from "react";

/**
 *
 * @param {Object} props
 * @param {(value: String) => void} props.onSubmit - Callback function to be called when the new todo is submitted
 * @returns
 */
const TodoInput = ({ onSubmit }) => {
	const [value, setValue] = React.useState("");

	const handleSubmit = () => {
		onSubmit(value);
		setValue("");
	};

	return (
		<div>
			<input
				type="text"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				data-testid="todo-input__input"
			/>
			<button onClick={handleSubmit} data-testid="todo-input__button">
				Submit
			</button>
		</div>
	);
};

export default TodoInput;
