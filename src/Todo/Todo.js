import React, { Component } from 'react';
import './Todo.scss';

class Todo extends Component {

	render() {
		return (
			<div className="Todo">
				<h3>Todo List:</h3>
				<p>Make a Todo list (add & delete options):</p>
				<input placeholder="Your task..." /> <button>Add task</button>
			</div>
		)
	}
}

export default Todo;
