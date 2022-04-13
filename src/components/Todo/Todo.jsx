import React from "react";
import TodoModel from "./TodoModel";

/**
 * @param {Object} props
 * @param {TodoModel} props.todo - TodoModel instance
 * @param {Function} props.onClick - Callback function to be called when the todo is clicked
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
