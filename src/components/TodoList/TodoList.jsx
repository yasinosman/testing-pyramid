import React from "react";
import Todo, { TodoModel } from "../Todo";
import TodoInput from "../TodoInput";

let id = 0;

const TodoList = () => {
	const [todos, setTodos] = React.useState([]);

	const handleTodoClick = (todo) => {
		setTodos(todos.map((t) => (t.id === todo.id ? { ...t, completed: !t.completed } : t)));
	};

	const handleSubmit = (value) => {
		const newTodo = new TodoModel({
			id: id++,
			text: value,
			completed: false,
		});

		setTodos([...todos, newTodo]);
	};

	return (
		<div>
			<ul>
				{todos.map((todo) => (
					<li key={todo.id}>
						<Todo todo={todo} onClick={handleTodoClick} />
					</li>
				))}
			</ul>

			<TodoInput onSubmit={handleSubmit} />
		</div>
	);
};

export default TodoList;
