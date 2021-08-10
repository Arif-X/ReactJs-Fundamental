import React from 'react'

function Data(props, key) {
    return (
        <div>
            {key.key}<h2>Hello, I'm {props.name}</h2>
        </div>
    )
}

export default Data
