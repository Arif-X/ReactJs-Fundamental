import React, { Component } from 'react'

export class Clicked extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: "Click the Button",
            count: 0
        }
    }

    onClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={this.onClick}>Click</button><br/>
                <h3>Clicked {this.state.count}</h3>
            </div>
        )
    }
}

export default Clicked
