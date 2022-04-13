import React from "react";
// eslint-disable-next-line no-unused-vars
import TodoModel from "./TodoModel";

/**
 * @param {Object} props
 * @param {TodoModel} props.todo - TodoModel instance
 * @param {(todo: TodoModel) => void} props.onClick - Callback function to be called when the todo is clicked
 */
const Todo = ({ todo, onClick }) => {
	const handleClick = React.useCallback(() => {
		onClick(todo);
	}, [todo, onClick]);

	return (
		<div onClick={handleClick}>
			<span>{todo.text}</span>
		</div>
	);
};

export default Todo;
