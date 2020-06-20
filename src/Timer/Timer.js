import React, { useState, useEffect } from 'react';
import './Timer.scss';

function Timer () {

	const  [seconds, setSeconds]= useState(0)

	useEffect (()=>{  //component did month

		const timer=setInterval (()=>{	

			setSeconds(seconds => seconds + 1)
		},1000)	
		return () =>{  //will unmount
			clearInterval(timer)
		}
	},[])  //answer--> set interval inside use effect

	return (
		<div className="Timer">
			<h3>Timer</h3>
			<p>
				Make a timer that counts the seconds.
				Update it every second.
			</p>
		<div className="Timer__value">{seconds}</div>
		</div>
	)

}

export default Timer;
