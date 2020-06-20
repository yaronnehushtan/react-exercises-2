import React from 'react';

function ListItem(props) {

    const deleteItem = ()=>{
        
    }

    return (
        <div>
            <li>
                {props.value}<button onClick={deleteItem}>Del</button>
            </li>
            
        </div>
    );
}

export default ListItem;