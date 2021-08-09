import React, { Component } from 'react'

export default class Greet extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            message: "Click the Button"
        }
    }

    theAction = () => {
        this.setState({
            message: "Already Clicked"
        })
    }

    takeAction() {
        this.setState({
            message: "Back"
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.message}</h2>
                <button onClick={this.theAction}>Click Here</button><br/>
                <button onClick={() => this.takeAction()}>Or Here</button>
            </div>
        )
    }
}
