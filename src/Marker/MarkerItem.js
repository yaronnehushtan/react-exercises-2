import React from 'react';


function MarkerItem (props) {

    const inner = {__html:props.value.split(props.markerValue).join(`<span className='markerSpan'>${props.markerValue}</span>`)};

    return (
        <div className='MarkerItem'>
            <li dangerouslySetInnerHTML={inner}></li>
        </div>
    );

}

export default MarkerItem;