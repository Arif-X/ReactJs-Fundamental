import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            parent: "Parent Name",
            text: "Click Here"
        }

        this.clickParent = this.clickParent.bind(this)
    }

    // Main Code
    clickParent = (child) => {
        alert(`Hello, ${this.state.parent} from ${child}`)
    }

    render() {
        return (
            <div>
               <Child text={this.state.text} child={() => this.clickParent('Child')} clickHandler={this.clickParent}/>
               <br />
               <h2>One Class Result</h2>
               <button onClick={() => this.clickParent('Hola')}>Click for One Class Result</button>
            </div>
        )
    }
}
