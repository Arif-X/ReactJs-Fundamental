import React, { Component } from 'react'

class Conditional extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isAuthed: true         
        }
    }
    
    render() {

        return this.state.isAuthed ? (
            <div><h2>Hello Rip</h2></div>
        ) : (
            <div><h2>Hello Guest</h2></div>
        )

        // let message
        // if(this.state.isAuthed){
        //     message = <div>
        //             <h2>Hello Rip</h2>
        //         </div>
        // } else {
        //     message = <div>
        //             <h2>Hello Guest</h2>
        //         </div>
        // }
        // return (
        //     <div>
        //         {message}
        //     </div>
        // )
    }
}

export default Conditional