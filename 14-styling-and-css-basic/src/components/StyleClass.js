import React, { Component } from 'react'
import './Style.css'

export class StyleClass extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Style Class'
        }
    }
    
    render() {
        return (
            <div>
                <h1 className='primary'>{this.state.name}</h1>
            </div>
        )
    }
}

export default StyleClass
