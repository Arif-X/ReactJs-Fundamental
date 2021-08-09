import React, { Component } from 'react'

export default class EventClass extends Component {

    Click = () => {
        alert('Event Class Clicked')
    }

    render() {
        return (
            <div>
                <button onClick={this.Click}>Event Class Button</button>
            </div>
        )
    }
}
