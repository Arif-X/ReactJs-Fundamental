import React from 'react'

function FunctionalEvent() {

    function Click() {
        alert('Functional Event Clicked')
    }

    return (
        <div>
            <button onClick={() => Click()}>Functional Click Here</button>
        </div>
    )
}

export default FunctionalEvent