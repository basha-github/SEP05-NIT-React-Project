import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Movies{
  Title:string;
  Runtime:string;
  Year:string;
  Poster:string;
}
export default function AllMoviesList() {

const [allMovies,setAllMovies] = useState<Movies[]>([]);
const nav = useNavigate();


const goEdit = ()=>{
  nav("/edit")
}

const goMovie =()=>{
  nav("/mDes")
}
  useEffect(()=>{

    axios.get<Movies[]>("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
    .then(res=>setAllMovies(res.data))
  });
  return (
    <div>
       <NavBar />
      
      {allMovies.map(eachMovie=>(
        <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img 
            onClick={goMovie}
            src={eachMovie.Poster}
             className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{eachMovie.Title}</h5>
              <button 
              onClick={goEdit}
              type="button" 
              className="btn btn-info">Edit</button>
            </div>
          </div>
        </div>
      </div>


      ))}
      
      
      </div>
  )
}
