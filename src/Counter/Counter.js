import React, { useState } from 'react';
import './Counter.scss';


function Counter () {

	const [counter,setCounter] = useState (0)

	const increase = ()=> {
		setCounter (counter+1)
	}

	const decrease = ()=> {
		setCounter (counter-1)
	}


		return (
			<div className="Counter">
				<p>Make the button increase the value:</p>
				<button onClick={increase}>Increase</button>
				<button onClick={decrease}>Decrease</button>
				<div className="Counter__value">{counter}</div>
			</div>
		)
}

export default Counter;
