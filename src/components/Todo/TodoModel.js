export default class TodoModel {
	/**
	 * @param {Object} props
	 * @param {String} props.text - The text of the todo
	 * @param {Boolean} props.completed - Whether the todo is completed
	 * @param {Number} props.id - The id of the todo
	 */
	constructor({ id, text, completed }) {
		this.id = id;
		this.text = text;
		this.completed = completed;
	}
}
