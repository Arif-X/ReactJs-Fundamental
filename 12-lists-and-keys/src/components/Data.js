import React from 'react'

function Data(props, key) {
    return (
        <div>
            {key.key}<h2>Hello, I'm {props.name}. My javascript framework skill is {props.skill}.</h2>
        </div>
    )
}

export default Data
