import React from 'react'

function Child(props) {
    return (
        <div>
            <h2>{props.text}</h2>
            <button onClick={() => props.clickHandler('Child')}>Click Here</button>
        </div>
    )
}

export default Child
