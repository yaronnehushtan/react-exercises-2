import React, { Component } from 'react';
import logo from './logo.svg';
import './Toggle.scss';

class Toggle extends Component {

	render() {
		return (
			<div className="Toggle">
				<p>Make the logo show and disappear when clicking on the button.</p>
				<button>Show / Hide</button>
				<div className="Toggle__logo-wrapper">
					<img src={logo} alt="logo" />
				</div>
			</div>
		)
	}
}

export default Toggle;
