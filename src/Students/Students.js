import React, { Component } from 'react';
import './Students.scss';

class Students extends Component {

	constructor(props) {
		super(props);
		this.state = {
			students: [
				'Joshua Miller',
				'Marc Feldman',
				'Ariana Grande',
				'Michael Jackson'
			]
		};
	}

	render() {
		return (
			<div className="Students">
				<h3>Students:</h3>
				<p>Display a bullet point list of all the `students` in the state.</p>
				<ul>

				</ul>
			</div>
		)
	}
}

export default Students;
