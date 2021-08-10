import React, { Component } from 'react'

export default class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             address: '',
             skill: 'react',
             greed: ''
        }
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    handleAddress = (event) => {
        this.setState({
            address: event.target.value,
        })
    }

    handleSkill = (event) => {
        this.setState({
            skill: event.target.value
        })
    }

    handleForm = (event) => {
            alert(`Hello ${this.state.name} from ${this.state.address} you have skill of ${this.state.skill}`)
            event.preventDefault()
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleForm}>
                    <h2>{this.state.greed}</h2>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input type="text" id="name" value={this.state.name} onChange={this.handleName}></input>
                    <br /><br />
                    <label htmlFor="address">Address</label>
                    <br />
                    <textarea id="address" value={this.state.address} onChange={this.handleAddress}></textarea>
                    <br /><br />
                    <label htmlFor="skill">Skill</label>
                    <br />
                    <select value={this.state.value} onChange={this.handleSkill}>
                        <option value="angular">Angular Js</option>
                        <option value="react">React Js</option>
                        <option value="vue">Vue Js</option>
                    </select>
                    <br /><br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
