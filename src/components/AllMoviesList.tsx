import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface Movies{
  id:string;
  title:string;
  runtime:string;
  year:string;
  poster:string;
}
export default function AllMoviesList() {

const [allMovies,setAllMovies] = useState<Movies[]>([]);
const nav = useNavigate();


const goEdit = (id:string)=>{
  nav("/edit/"+id)
}

const goMovie =(id:string)=>{
  nav("/mDes/"+id)
}
  useEffect(()=>{
    axios.get<Movies[]>("http://localhost:1234/nit/movies/all")
    .then(res=>{
      console.log("res--->"+res.data);
      setAllMovies(res.data)
  })
  }
,[]);
  return (
    <div>
       <NavBar />
      
      {allMovies.map(eachMovie=>(
        <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img 
            onClick={()=>{
              goMovie(`${eachMovie.id}`)
            }
           }
            src={eachMovie.poster}
             className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{eachMovie.title}</h5>
              <button 
              onClick={()=>{
                goEdit(`${eachMovie.id}`)
              }
             }
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