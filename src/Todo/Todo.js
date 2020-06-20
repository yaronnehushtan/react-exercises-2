import React, { useState } from 'react';
import './Todo.scss';
// import ListItem from './ListItem'; <ListItem key={index} value={item} deleteItem={}/>

function Todo() {

	const [list, setList] = useState([]);
	const [input,setInput] = useState('');

	const getInput	= (e) =>{
		setInput(e.target.value)
	}

	const addItem = ()=>{
		setList([...list, input])
		setInput('');
	}

	const deleteItem= (e) => {
		const newList=[...list];
		newList.splice(parseInt(e.target.value), 1);
		setList(newList)
	}

		return (
			<div className="Todo">
				<h3>Todo List:</h3>
				<p>Make a Todo list (add & delete options):</p>
				<input placeholder="Your task..." onChange={getInput} value={input}/><button onClick={addItem}>Add task</button>
				<ul>
					{list.map((item,index)=>{
						return (
							<li key={index}>{item}
								<button value={index} onClick={deleteItem}>Del</button>
							</li>
						)
					})}
					
				</ul>
			</div>
		)

}

export default Todo;
