import React from 'react'
import Data from './Data'

function List() {
    const array = ['Arif', 'Ari', 'Fira']
    // Main Code
    // const data = array.map((array, index) => <h2 key={index}>{index}{array}</h2>)
    const data = array.map((array, index) => <Data key={index} name={index + ' ' + array} />)
    return (
        <div>
            {data}
        </div>
    )
}

export default List
