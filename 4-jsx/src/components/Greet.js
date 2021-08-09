import React from 'react'

export const Greet = () => {
    return(
        <div>
            <h2>Default Element</h2>
        </div>
    )
}

export const Greets = () => {
    // Null Value is for element's attr
    return (
        React.createElement('div', null, 
            [
                React.createElement('h2', null, 'JSX Form'),
                React.createElement('form', null, 
                    [
                        React.createElement('label', {htmlFor: 'textInput'}, 'Label'),
                        React.createElement('input', {type: 'number', id: 'textInput', className: 'form-control'})
                    ]
                )
            ]
        )
    )
}