import React from 'react'
import Moviecard from './MovieCard'
import './Movielist.css'

export default function MovieList({ mdata , mname , mrate}) {
    return (
        <div className="list">
            {mdata.map((el, i) => el.title.toLowerCase().includes(mname.toLowerCase()) ? (mrate==0 || el.rating==mrate? <Moviecard key={i} list={el} />:null):null)}
        </div>
    )
}
