import React, { useState } from 'react';
import './App.css';
import Movielist from './component/MovieList'
import {data} from './component/MovieData'
import Moviefilter from './component/MovieFilter'
import Rater from'./component/MoviefilterRate'
import Movieadd from './component/MovieAdd'

function App() {

  var change=0

  const [moviedata,setMoviedata]=useState(data)
  const [moviename,setMoviename]=useState("")
  const [rate, setRate] = useState(0)
  const [movied, setMovied] = useState()
  

  function gettext(str){
    setMoviename(str);
  }

  function getrate(str){
    setRate(str);
  }

  function addm(str){
    setMoviedata([...moviedata, str])
    change++
  }
  


  return (
    <>
    <Movieadd handleChange={addm} /><br/>
    <div style={{display:'flex'}}>
    <Moviefilter  handleChange={gettext}/>
    <Rater handle={getrate}/>
    </div>
    <Movielist mdata={moviedata} mname={moviename} mrate={rate} datachange={change}/>
    </>
  );
}

export default App;
