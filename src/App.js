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
  

  function gettext(str){
    setMoviename(str);
  }

  function getrate(str){
    setRate(str);
  }

  function addm(str){
    setMoviedata([...moviedata, str])
  }
  


  return (
    <>
    <div style={{display:'flex' ,justifyContent:'center'}}>
      <Moviefilter  handleChange={gettext}/>
      <Rater handle={getrate}/>
    </div>
    <Movielist mdata={moviedata} mname={moviename} mrate={rate}/>
    <div style={{display:'flex' ,justifyContent:'center',marginBottom:'5%'}}>
    <Movieadd handleChange={addm} />
    </div>
    </>
  );
}

export default App;
