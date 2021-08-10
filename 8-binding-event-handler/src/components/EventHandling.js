import React, { Component } from 'react'

export default class EventHandling extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: "hello"
        }

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler = () => {
        this.setState({
            message: 'done'
        })
    }
    

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                {/* <button onClick={this.clickHandler.bind(this)}>Click Here</button>
                <button onClick={() => this.clickHandler()}>Click Here</button> */}
                <button onClick={this.clickHandler}>Click Here</button>
            </div>
        )
    }
}
