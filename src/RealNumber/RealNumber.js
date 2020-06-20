import React, { useState } from 'react';
import './RealNumber.scss';

function RealNumber () {

	const [showButton, setShowButton] = useState(false);

	//&& e.target.value!==''

	const getInput = (e) => {
		if(!isNaN(e.target.value) && e.target.value!==''){
			setShowButton(true)
		} else {
			setShowButton(false)
		}
		
	}

	return (
		<div className="RealNumber">
			<p>
				The button near the input should be visible only if the input contains <u>only</u> numbers.
				Examples:<br />
				"238764" - <span className="value--valid">valid</span> <br />
				"A13" - <span className="value--invalid">invalid</span>
			</p>

			<input type="text" className="text-box" onChange={getInput}/>
			{showButton && <button>Submit</button>}
		</div>
	)

}

export default RealNumber;
