import React from 'react'

export default function MovieFilter(props) {
    return (
        <div  style={{margin:'2%'}}>
            <input type='text' onChange={(e)=>props.handleChange(e.target.value)}></input>
        </div>
    )
}
