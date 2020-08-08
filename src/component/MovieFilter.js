import React from 'react'

export default function MovieFilter(props) {
    return (
        <div  style={{margin:'2%',display:'flex',flexDirection:'row',height:'35px'}}>
            <h4 style={{marginRight:'5%'}}>Filter</h4>
            <input type='text' onChange={(e)=>props.handleChange(e.target.value)}></input>
        </div>
    )
}
