import React from 'react'

const Greet = props => {
    return(
        <div>
            <h2>
                Hello {props.name} from {props.place}
            </h2>
            {props.children}
        </div>
    )
}

export default Greet