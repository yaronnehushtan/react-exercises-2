import React from 'react';


function Colorize (props) {


        return (
            <div className={`color--${props.color}`}>
                {props.color}
            </div>
        );

}

export default Colorize;