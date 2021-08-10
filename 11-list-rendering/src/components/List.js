import React from 'react'
import Data from './Data'

function List() {
    const array = [
        {
            id: '1',
            name: 'Arif',
            skill: 'ReactJs'
        },
        {
            id: '2',
            name: 'Ari',
            skill: 'VueJs'
        },
        {
            id: '3',
            name: 'Fira',
            skill: 'Angular'
        }
    ]
    // const data = array.map(array => <h2>Hello, I'm {array.name}. My javascript framework skill is {array.skill}.</h2>)
    const data = array.map(array => <Data name={array.name} skill={array.skill}/>)
    return (
        <div>
            {data}
        </div>
    )
}

export default List
