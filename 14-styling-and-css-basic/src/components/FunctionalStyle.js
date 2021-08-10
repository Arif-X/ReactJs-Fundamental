import React from 'react'
import './Style.css'

function FunctionalStyle(props) {
    let className =  'primary'
    return (
        <div>
            <h1 className={`${className} font-xl`}>{props.name}</h1>
        </div>
    )
}

export default FunctionalStyle
