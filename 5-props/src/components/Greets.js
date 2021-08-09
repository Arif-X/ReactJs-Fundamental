import React, { Component } from 'react'

export default class Greets extends Component {
    render() {
        return(
            <div>
                <h2>
                    Hello {this.props.name} from {this.props.place}
                </h2>
                {this.props.children}
            </div>
        )
    }
}
